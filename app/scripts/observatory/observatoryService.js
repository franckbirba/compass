'use strict';

/**
 * @ngdoc service
 * @name tornadoApp.observatoryService
 * @description
 * # observatoryService
 * Factory in the tornadoApp.
 */

angular.module('observatoryModule')
  .factory('observatoryService', function ObservatoryService($http, $q, PortfolioService, TornadoApi, DUMMY) {

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
      // test: function(portfolioId) {
      //   var params = portfolioId ?  { portfolio: '1' } : {};
      //   return $http.get('crud/portfolio/', params).then(function(response) {
      //     return response.data;
      //   });
      // },
      test: function(id){
        return TornadoApi.request('get', 'portfolio', {name: 'portfolio1'})
      },

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
      },
      newPortfolio: function(){
        return PortfolioService.newInstance()
      }
    };
  });
