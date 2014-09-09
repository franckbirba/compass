'use strict';

/**
 * @ngdoc service
 * @name tornadoApp.observatoryService
 * @description
 * # observatoryService
 * Factory in the tornadoApp.
 */

angular.module('observatoryModule')
  .service('observatoryService', function ObservatoryService($http, $q, PortfolioService, TornadoApi, DUMMY) {
    var self = this;

    // Static values
    this.values = {
      consumptionChartDataDefaults: DUMMY.consumptionChartDataDefaults,
      hqeTypes:                     DUMMY.hqe_types,
      map:                          DUMMY.observatory_map,
      usageTypes:                   DUMMY.usage_types
    };

    // Private functions
    function fetchPortfolios(){
      $http.get('/crud/portfolio/').then(function(res) {
        return res.data;
      }).then(function(res){
        res.forEach(function(elem){
          self.portfolios.push(PortfolioService.newInstance(elem));
        })
      })
    };

    // Public functions
    this.portfolios = [];

    this.getPortfolios = function(){
      fetchPortfolios();
      return this.portfolios;
    }

    this.addPortfolio = function(elem){
      var port = PortfolioService.newInstance(elem);
      // Call to Api create should happen here

      // Make new portfolio available to scope
      this.portfolios.push(port);
    }

  });
