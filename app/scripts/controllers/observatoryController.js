'use strict';
angular.module('compassApp').controller('ObservatoryController', ['$scope', '$timeout', 'buildingService', 'Geocoder',
  function($scope, $timeout, buildingService, Geocoder){

  // map
  $scope.map = {
      center: {
          latitude: 48.8715008,
          longitude: 2.3268878999999743
      },
      zoom: 10
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

  // choose zoom and center for google map according to visible buildings
  $scope.chooseMapPositioningAndZoom = function(coordinates) {
    var lat = 0.00
      , lng = 0.00
      , zoom = 10
      , latMin = 90.00
      , latMax = 0.00
      , lngMin = 180.00
      , lngMax = 0.00
      , distMax = 0.00;

      if (!coordinates || !coordinates instanceof Array || !coordinates.length) {
        return;
      }

      coordinates.forEach(function(c){
        if (c.latitude > latMax) latMax = c.latitude;
        if (c.latitude < latMin) latMin = c.latitude;
        if (c.longitude > lngMax) lngMax = c.longitude;
        if (c.longitude < lngMin) lngMin = c.longitude;
      });
      
      lat = (latMax + latMin) / 2;
      lng = (lngMax + lngMin) / 2;
      
      // TODO: calculate zoom
      // we take approximate max distance, which is the distance between 2 edge points
      //distMax = Math.sqrt( Math.pow( (latMax-latMin), 2 ) + Math.pow( (lngMax - lngMin), 2 ) );

      $scope.map = {
          center: {
              latitude: lat,
              longitude: lng
          },
          zoom: zoom
      };
      //$scope.$digest();
  }
  // load everything without special business logic

  buildingService.getPortfolios().then(function(response){
    observatory.portfolios = response.data;
  });
  
  buildingService.getBuildings().then(function(response) {

    if (response && response.data && response.data instanceof Array) {

      response.data.forEach(function(b, idx, arr){
        var addr = [ b.address, b.city, b.country ].join(',');

        $scope.geocoder.geocodeAddress(addr).then(function(result){
          this.id = this.id || this._id;
          this.position = {
            "latitude": parseFloat(result.lat),
            "longitude": parseFloat(result.lng),
            "formattedAddress": result.formattedAddress
          };
          observatory.buildings.push(this);
          // last building is processed - launch map repositioning
          if (idx === arr.length -1) {
            $scope.chooseMapPositioningAndZoom( _.pluck(observatory.buildings, 'position') );
          }
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

  };
  
  $scope.closeClick = function() {
    
  }

}]);
