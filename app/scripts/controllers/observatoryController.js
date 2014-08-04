'use strict';
angular.module('compassApp').controller('ObservatoryController', ['$scope', 'buildingService', 'Geocoder', function($scope, buildingService, Geocoder){
  var observatory = this;
  this.portfolios = [];
  this.buildings = [];
  this.leases = [];
  
  // load everything without special business logic
  
  buildingService.getPortfolios().then(function(response){
    console.log('in controller -> portfolios ');
    console.log(response);
    observatory.portfolios = response.data;
  });
  
  buildingService.getBuildings().then(function(response) {
    console.log('in controller -> buildings ');
    console.log(response);
    observatory.buildings = response.data;
  });
  
  buildingService.getLeases().then(function(response){
    console.log('in controller -> leases ');
    console.log(response);
    observatory.leases = response.data;
  });

  $scope.usageTypes = buildingService.getUsageTypes();
  $scope.currentUsageType = '0';

  this.markerClick = function() {
    //alert('marker clicked');
  };
  
  $scope.closeClick = function() {
    
  }

}]);
