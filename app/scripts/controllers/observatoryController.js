'use strict';
angular.module('compassApp').controller('ObservatoryController', ['$scope', 'buildingService', 'Geocoder', function($scope, buildingService, Geocoder){
  
  // map
  $scope.map = {
      center: {
          latitude: 48.8715008,
          longitude: 2.3268878999999743
      },
      zoom: 14
  };
  
  $scope.geocoder = Geocoder;

  var observatory = this;
  this.portfolios = [];
  this.buildings = [];
  this.leases = [];
  this.consumptionChartData = [ 
  {
    key: "Cumulative Return",
    values: [
    { 
      "label" : "A Label",
      "value" : 0
    } ,
    { 
      "label" : "B Label",
      "value" : 0
    } ,
    { 
      "label" : "C Label",
      "value" : 0
    } ,
    { 
      "label" : "D Label",
      "value" : 0
    } ,
    { 
      "label" : "E Label",
      "value" : 0
    } ,
    { 
      "label" : "F Label",
      "value" : 0
    } ,
    { 
      "label" : "G Label",
      "value" : 0
    } ,
    { 
      "label" : "H Label",
      "value" : 0
    }
    ]
  }
  ];
  
  // load everything without special business logic
  
  buildingService.getPortfolios().then(function(response){
    observatory.portfolios = response.data;
  });
  
  buildingService.getBuildings().then(function(response) {

    if (response && response.data && response.data instanceof Array) {
      response.data.forEach(function(b, idx){
        var addr = [ b.address, b.city, b.country ].join(',');

        $scope.geocoder.geocodeAddress(addr).then(function(result){
          this.id = this.id || this._id;
          this.position = {
            "latitude": parseFloat(result.lat),
            "longitude": parseFloat(result.lng),
            "formattedAddress": result.formattedAddress
          };
          observatory.buildings.push(this);
        }.bind(b));

      });
    }

  });

  buildingService.getLeases().then(function(response){
    observatory.leases = response.data;

    var lease, label, chartBlock;
    
    for (var i=0, l=observatory.leases.length; i<l; i++) {
      lease = observatory.leases[i];
      label = lease.consumptionGrade;
      for (var k=0, l2 = observatory.consumptionChartData[0].values.length; k<l2; k++) {
        chartBlock = observatory.consumptionChartData[0].values[k];
        if (chartBlock.label.indexOf(label) !== -1) {
          chartBlock.value += !isNaN( parseFloat(lease.consumptionValue) ) ? parseFloat(lease.consumptionValue) : 0;
          continue;
        }
      }
    }
        debugger;
    nv.addGraph(function() {
      var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })    //Specify the data accessors.
        .y(function(d) { return d.value })
        .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
        .tooltips(false)        //Don't show tooltips
        .showValues(true)       //...instead, show the bar value right on top of each bar.
        .transitionDuration(350)
        ;

      d3.select('#chart svg')
        .datum(observatory.consumptionChartData)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
    
  });

  $scope.usageTypes = buildingService.getUsageTypes();
  $scope.currentUsageType = '0';

  this.markerClick = function() {
    //alert('marker clicked');
  };
  
  $scope.closeClick = function() {
    
  }

}]);
