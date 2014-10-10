(function(){
  'use strict';

  function Config($routeProvider, PortfolioSvc){
    // change to true to turn on authentification
    var auth = false;
    var path = 'scripts/observatory/views/';
    $routeProvider
      .when('/observatory', {
        templateUrl: path + 'observatory.tpl.html',
        controller: 'ObservatoryCtrl',
        authenticate: auth,
        resolve: PortfolioSvc
      });
  };

  Config.$inject = ['$routeProvider', 'PortfolioSvcProvider'];

  angular.module('observatoryMdl')
    .config(Config)

})();
