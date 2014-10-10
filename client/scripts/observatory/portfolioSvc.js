(function(){
  'use strict';

  function PortfolioSvc(Restangular) {
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
     resolve_test: 'test',
     createPortfolio: createPortfolio
    }
  };

  PortfolioSvc.$inject = ['Restangular'];
  angular.module('observatoryMdl')
    .factory('PortfolioSvc', PortfolioSvc);

})();
