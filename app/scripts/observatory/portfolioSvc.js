'use strict';

ObsModule
  .factory('PortfolioSvc', function PortfolioSvc(Restangular, Portfolio) {
    var resource = 'portfolios';
    var Portfolio = Restangular.service(resource);

    // Restangular.extendModel(resource, function(model){
    //   return angular.extend(model, {
    //     summary: {
    //       buildings: [],
    //       total_suface: '',
    //       occupation_rate: '',
    //       condition_index: '',
    //       conformity_index: '',
    //       avg_performence: '',
    //       avg_age: ''
    //     }
    //   });
    // });

    function createPortfolio(params){
      var elem = Restangular.one(resource);
      angular.extend(elem, params);
      return elem.post().then(function(res){
        elem.id = res._id;
        return elem;
      })
    }

    return {
     rest: Portfolio,
     createPortfolio: createPortfolio
    }
  });
