'use strict';

ObsModule
  .factory('PortfolioSvc', function PortfolioSvc(Restangular, Portfolio) {
    var resource = 'portfolios';
    var Portfolio = Restangular.service(resource);

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
