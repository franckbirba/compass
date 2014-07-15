'use strict';
angular.module('compassApp').controller('ObservatoryController', ['$scope', 'buildingService', function($scope, buildingService){
  this.buildings = buildingService.getAll();

  $scope.usageTypes = buildingService.getUsageTypes();
  $scope.currentUsageType = '0';

  this.markerClick = function() {
    alert('marker clicked');
  }

}]);
