'use strict';

angular.module('observatoryModule')
  .factory('PortfolioSvc', function PortfolioSvc(Restangular) {
    var Portfolio = Restangular.service('portfolio/');

    Restangular.extendModel('portfolio/', function(model){
      return angular.extend(model, {
        //doesn't work. need to add to server response
        summary: function(){
            this.batiments = '';
            this.superficie_total= '';
            this.taux_occupation= '';
            this.indice_vestute= '';
            this.indice_conformite= '';
            this.perf_moyenne= '';
            this.age_moyen= '';
        }
      });
    });
    return Portfolio;
  });
