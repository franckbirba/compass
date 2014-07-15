'use strict';
angular.module('compassApp').controller('ObservatoryController', ['$scope', 'buildingService', function($scope, buildingService){
  this.buildings = buildingService.getAll();

  //this.usageTypes = buildingService.test();//buildingService.getUsageTypes();
  $scope.usageTypes = ["A", "B", "C"];

  this.markerClick = function() {
    alert('marker clicked');
  }

}]);
