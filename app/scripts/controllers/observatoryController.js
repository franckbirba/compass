'use strict';
angular.module('compassApp').controller('ObservatoryController', ['buildingService', function(buildingService){
  this.buildings = buildingService.getAll();
  
}]);
