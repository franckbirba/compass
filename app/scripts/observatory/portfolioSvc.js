'use strict';

ObsModule
  .factory('PortfolioSvc', function PortfolioSvc(Restangular, Portfolio) {
    var Portfolio = Restangular.service('portfolios');
    // Restangular.extendCollection('portfolio', function(collection){
    //   // to restangularize new elem added to collection
    //   collection.add = function(params){
    //     var data = _.clone(params);
    //     var portfolio = Restangular.restangularizeElement(this.parentResource, data, 'portfolio');
    //     this.push(portfolio);
    //   };
    //   return collection;
    // });
    Restangular.extendModel('portfolios', function(model){
      return angular.extend(model, {
        summary: {
          buildings: [],
          total_suface: '',
          occupation_rate: '',
          condition_index: '',
          conformity_index: '',
          avg_performence: '',
          avg_age: ''
        }
      });
    });
    return Portfolio;
  });
