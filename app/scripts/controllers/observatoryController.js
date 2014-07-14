'use strict';
angular.module('compassApp').controller('ObservatoryController', ['buildingService', function(buildingService){
  this.buildings = buildingService.getAll();

  this.usageTypes = buildingService.getUsageTypes();

  this.markerClick = function() {
    alert('marker clicked');
  }

}]);
