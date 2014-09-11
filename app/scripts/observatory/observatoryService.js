'use strict';

/**
 * @ngdoc service
 * @name tornadoApp.observatoryService
 * @description
 * # observatoryService
 * Factory in the tornadoApp.
 */

angular.module('observatoryModule')
  .service('observatorySvc', function ObservatorySvc($http, $q, Restangular, PortfolioSvc, DUMMY) {
    var self = this;

    // Static values
    this.values = {
      consumptionChartDataDefaults: DUMMY.consumptionChartDataDefaults,
      hqeTypes:                     DUMMY.hqe_types,
      map:                          DUMMY.observatory_map,
      usageTypes:                   DUMMY.usage_types
    };


    // Public functions
    this.portfolios = PortfolioSvc.getList().$object;

    this.addPortfolio = function(elem){
      //var port = PortfolioService.newInstance(elem);
      // Call to Api create should happen here

      // Make new portfolio available to scope
      this.portfolios.push(port);
    }

    this.delPortfolio = function(portfolio){
      var index = this.portfolios.indexOf(portfolio);
      var port = this.portfolios[index];
      port.remove().then(function(res) {
        console.log(res);
        if (index > -1) self.portfolios.splice(index, 1);
      });
    }

  });
