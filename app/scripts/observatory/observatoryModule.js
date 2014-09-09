'use strict';

var ObsModule = angular.module('observatoryModule', []);

ObsModule.config(function ($routeProvider) {
  // change to true to turn on authentification
  var auth = false;

  $routeProvider
    .when('/observatory', {
      templateUrl: 'scripts/observatory/views/observatory.tpl.html',
      controller: 'ObservatoryCtrl',
      authenticate: auth
    })
});
