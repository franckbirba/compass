'use strict';

var Observatory = angular.module('Observatory', []);

Observatory.config(function ($routeProvider, $locationProvider, $httpProvider) {
  // change to true to turn on authentification
  var auth = false;
  $routeProvider
    .when('/observatory', {
      templateUrl: 'scripts/observatory/views/observatory',
      controller: 'ObservatoryCtrl',
      authenticate: auth
    })
});
