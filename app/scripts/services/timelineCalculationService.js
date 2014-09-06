'use strict';

angular.module('compassApp').service('timelineCalculationService', [function(){
  var self = this;

  self.overallCostTRIEconomie = function(timelineData) {
    return {
      totalActions: 0,
      totalCost: 0,
      totalTRI: 0,
      totalEconomie: 0
    };
  };

  self.generateGraphConsumption = function(timelineData) {
    return [];
  };

  self.generateGraphCost = function(timelineData) {
    return [];
  };
}]);