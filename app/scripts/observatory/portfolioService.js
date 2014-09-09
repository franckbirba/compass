'use strict';

angular.module('Observatory')
  .factory('PortfolioService', function PortfolioService(){
    function Portfolio(params){
      var params = params || {};
      this.name = params.name;
      this.img  = params.img;
      this.desc = params.desc;
    }
    return {
      newInstance: function(params){
        return new Portfolio(params)
      }
    }
  })
