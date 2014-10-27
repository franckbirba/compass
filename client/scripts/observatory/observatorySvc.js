/**
 * @ngdoc service
 * @name tornadoApp.observatoryService
 * @description
 * # observatoryService
 * Factory in the tornadoApp.
 */

(function(){
'use strict';

  function ObservatorySvc($http, $q, Restangular, DUMMY){
    var self = this;

    // Static values
    this.values = {
      consumptionChartDataDefaults: DUMMY.consumptionChartDataDefaults,
      hqeTypes:                     DUMMY.hqe_types,
      map:                          DUMMY.observatory_map,
      usageTypes:                   DUMMY.usage_types
    };
  }

  ObservatorySvc.$inject = ['$http', '$q', 'Restangular', 'DUMMY'];

  angular.module('observatoryMdl')
    .service('ObservatorySvc', ObservatorySvc);

})();
