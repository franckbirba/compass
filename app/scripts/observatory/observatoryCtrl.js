'use strict';
angular.module('Observatory')
.controller('ObservatoryCtrl',
  function ObservatoryCtrl($scope, $timeout, buildingService, Geocoder, observatoryService){
    var db = observatoryService;
    var Obs = observatoryService.newObservatory();

    $scope.map = db.getMap();
    $scope.geocoder = Geocoder;
    $scope.portfolios = Obs.getPortfolios();

    // For adding a new Portfolio to Obs.
    $scope.tmp = {};
    $scope.portfolioNew = function(){
      var params = $scope.tmp;
      Obs.addPortfolio(params);
      $scope.tmp = {};
    }



    console.log($scope.portfolios);

    var observatory = this;
    // observatory.portfolios = [];
    // // here store filtered buildings by usage type and/or hqe
    // observatory.buildings = [];
    // // here store all buildings
    // observatory.buildingsStorage = [];
    // observatory.buildingsStorage.getById = function(id) {
    //   var item = null;
    //   for (var i=0, l=this.length; i<l; i++) {
    //     if (this[i]._id === id) {
    //       item = this[i];
    //       break;
    //     }
    //   }
    //   return item;
    // }
    // observatory.buildingsStorage.filterByGrade = function(grade) {
    //   if (grade === '0') {
    //     return observatory.buildingsStorage;
    //   }
    //   var items = [];
    //   for (var i=0, l=this.length; i<l; i++) {
    //     if (this[i].consumptionGrade === grade) {
    //       items.push(this[i]);
    //     }
    //   }
    //   return items;
    // }
    // // store leases
    // observatory.leases = [];
    // // store usage types
    // $scope.usageTypes = buildingService.getUsageTypes();
    // $scope.currentUsageType = '0';
    // $scope.filterByUsageType = function(newType) {
    //   observatory.buildings = observatory.buildingsStorage.filterByGrade(newType);
    // };
    // observatory.consumptionChartDataDefaults = db.getDefaults();
    // observatory.consumptionChartData = [
    // {
    //   key: "Cumulative Return",
    //   values: observatory.consumptionChartDataDefaults
    // }
    // ];

    // // choose zoom and center for google map according to visible buildings
    // $scope.chooseMapPositioningAndZoom = function(coordinates) {
    //   var lat = 0.00
    //     , lng = 0.00
    //     , zoom = 10
    //     , latMin = 90.00
    //     , latMax = 0.00
    //     , lngMin = 180.00
    //     , lngMax = 0.00
    //     , distMax = 0.00;

    //     if (!coordinates || !coordinates instanceof Array || !coordinates.length) {
    //       return;
    //     }

    //     coordinates.forEach(function(c){
    //       if (c.latitude > latMax) latMax = c.latitude;
    //       if (c.latitude < latMin) latMin = c.latitude;
    //       if (c.longitude > lngMax) lngMax = c.longitude;
    //       if (c.longitude < lngMin) lngMin = c.longitude;
    //     });

    //     lat = (latMax + latMin) / 2;
    //     lng = (lngMax + lngMin) / 2;

    //     // TODO: calculate zoom
    //     // we take approximate max distance, which is the distance between 2 edge points
    //     //distMax = Math.sqrt( Math.pow( (latMax-latMin), 2 ) + Math.pow( (lngMax - lngMin), 2 ) );

    //     $scope.map = {
    //         center: {
    //             latitude: lat,
    //             longitude: lng
    //         },
    //         zoom: zoom
    //     };
    // }
    // // load everything without special business logic

    // buildingService.getPortfolios().then(function(response){
    //   observatory.portfolios = response.data;
    // });

    // buildingService.getBuildings().then(function(response) {

    //   if (response && response.data && response.data instanceof Array) {

    //     response.data.forEach(function(b, idx, arr){
    //       var addr = [ b.address, b.city, b.country ].join(',');

    //       $scope.geocoder.geocodeAddress(addr).then(function(result){
    //         this.id = this.id || this._id;
    //         this.position = {
    //           "latitude": parseFloat(result.lat),
    //           "longitude": parseFloat(result.lng),
    //           "formattedAddress": result.formattedAddress
    //         };
    //         observatory.buildingsStorage.push(this);
    //         observatory.buildings.push(this);
    //         // last building is processed - launch map repositioning
    //         if (idx === arr.length -1) {
    //           $scope.chooseMapPositioningAndZoom( _.pluck(observatory.buildings, 'position') );
    //         }
    //       }.bind(b));

    //     });
    //   }

    //   buildingService.getLeases().then(function(response){
    //     observatory.leases = response.data;

    //     var lease, label, chartBlock, building;

    //     for (var i=0, l=observatory.leases.length; i<l; i++) {
    //       lease = observatory.leases[i];
    //       label = lease.consumptionGrade;
    //       building = observatory.buildingsStorage.getById(lease.building);
    //       building.consumptionValue = building.consumptionValue || 0;
    //       building.consumptionValue += parseFloat(lease.consumptionValue);
    //     }

    //     observatory.buildingsStorage.forEach(function(b){
    //       for (var k=0, l2 = observatory.consumptionChartData[0].values.length; k<l2; k++) {
    //         chartBlock = observatory.consumptionChartData[0].values[k];
    //         if (chartBlock.label.indexOf(b.consumptionGrade) !== -1) {
    //           chartBlock.value += !isNaN( parseFloat(b.consumptionValue) ) ? parseFloat(b.consumptionValue) : 0;
    //         }
    //       }
    //     });

    //     nv.addGraph(function() {
    //       var chart = nv.models.discreteBarChart()
    //         .x(function(d) { return d.label })    //Specify the data accessors.
    //         .y(function(d) { return d.value })
    //         .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
    //         .tooltips(false)        //Don't show tooltips
    //         .showValues(true)       //...instead, show the bar value right on top of each bar.
    //         .transitionDuration(350)
    //         ;

    //       d3.select('#chart svg')
    //         .datum(observatory.consumptionChartData)
    //         .call(chart);

    //       nv.utils.windowResize(chart.update);

    //       return chart;
    //     });

    //   });

    // });

    $scope.hqeTypes = db.getHqeTypes();
    // $scope.hqeType = 'all';
    // $scope.filterBuildingsByHqe = function(type) {
    //   switch (type) {
    //     case 'hqe': {
    //       observatory.buildings = _.where( observatory.buildingsStorage, { 'hqe': true } );
    //       break;
    //     }
    //     case 'nohqe': {
    //       observatory.buildings = _.where( observatory.buildingsStorage, { 'hqe': false } );
    //       break;
    //     }
    //     default:
    //     case 'all': {
    //       observatory.buildings = observatory.buildingsStorage;
    //       break;
    //     }
    //   }
    // };

    $scope.closeClick = function() {
    }
});
