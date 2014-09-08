'use strict';

/**
 * @ngdoc service
 * @name tornadoApp.observatoryService
 * @description
 * # observatoryService
 * Factory in the tornadoApp.
 */
angular.module('compassApp')
  .factory('observatoryService', function ObservatoryService($http, DUMMY) {

    function Observatory(){
      var params = params || {};
      //this.portfolios = params.portofolios || [];
      this.portfolios = DUMMY.portfolios;
      console.log(this.portfolios);
    }

    Observatory.prototype.getPortfolios = function(){
      return this.portfolios;
    }

    Observatory.prototype.addPortfolio = function(params){
      this.portfolios.push(params);
    }

    var consumptionChartDataDefaults = DUMMY.consumptionChartDataDefaults;
    var hqeTypes = DUMMY.hqe_types;
    var map = DUMMY.observatory_map;

    // Public API here
    return {
      getMap: function () {
        return map;
      },
      getDefaults: function(){
        return consumptionChartDataDefaults;
      },
      getHqeTypes: function(){
        return hqeTypes;
      },
      newObservatory: function(){
        return new Observatory();
      }
    };
  });
