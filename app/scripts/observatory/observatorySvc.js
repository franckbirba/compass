'use strict';

/**
 * @ngdoc service
 * @name tornadoApp.observatoryService
 * @description
 * # observatoryService
 * Factory in the tornadoApp.
 */


ObsModule.service('ObservatorySvc', function ObservatorySvc($http, $q, Restangular, PortfolioSvc, DUMMY) {
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
    // PortfolioSvc.getList().then(function(res){
    //   console.log(res);
    //   self.portfolios = res;
    // })

    this.addPortfolio = function(elem){
      console.log(elem);
      this.portfolios.post(elem).then(function(res){
        self.portfolios.push(res);
      })
    }

    this.delPortfolio = function(portfolio){
      var index = this.portfolios.indexOf(portfolio);
      var port = this.portfolios[index];
      console.log(port);
      port.remove().then(function(res) {
        console.log(res);
        if (index > -1) self.portfolios.splice(index, 1);
      });
    }

  });
