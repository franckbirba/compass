'use strict';

angular.module('observatoryModule')
  .factory('PortfolioService', function PortfolioService(){
    function Portfolio(params){
      var params = params || {};
      this.id = params._id;
      this.name = params.name;
      this.img  = params.img;
      this.desc = params.desc;
      this.buildings = params.buildings;
      this.summary = {
        batiments: '',
        superficie_total: '',
        taux_occupation: '',
        indice_vestute: '',
        indice_conformite: '',
        perf_moyenne: '',
        age_moyen: '',
      };
    }


    return {
      newInstance: function(params){
        return new Portfolio(params)
      },
      all: function(){
        var url = '/crud/portfolio';
        var ans = [];
        $http.get(url).then(function(res) {
          return res.data;
        }).then(function(res){
          res.forEach(function(elem){
            ans.push(new Portfolio(elem));
          })
          return ans;
        })
      }
    }
  });
