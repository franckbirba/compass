(function(){
'use strict';

/**
 * @ngdoc service
 * @name tornadoApp.routesConfig
 * @description
 * # routesConfig
 * Config for routes in the tornadoApp.
 */

angular.module('tornadoApp')
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    // change to true to turn on authentification
    var auth = false;
    var path = 'partials/';

    $routeProvider
      .when('/', {
        templateUrl: path + 'home', controller: '', authenticate: auth})
      .when('/login', {
        templateUrl: path + 'login',  controller: 'LoginCtrl' })
      .when('/signup', {
        templateUrl: path + 'signup', controller: 'SignupCtrl' })
      .when('/main', {
        templateUrl: path + 'main',  controller: '', authenticate: auth })
      .when('/home', {
        templateUrl: path + 'home',  controller: '', authenticate: auth })
      .when('/settings', {
        templateUrl: path + 'settings',  controller: 'SettingsCtrl', authenticate: auth })
      .when('/actionList', {
        templateUrl: path + 'actionList',  controller: 'ActionCtrl', authenticate: auth })
      .when('/applyAction', {
        templateUrl: path + 'applyAction',  controller: 'ActionCtrl', authenticate: auth })
      .when('/resultats', {
        templateUrl: path + 'resultats',  controller: 'ActionCtrl', authenticate: auth })
      .when('/newScenario', {
        templateUrl: path + 'newScenario',  controller: 'ActionCtrl', authenticate: auth })
      .when('/timeline', { // css
        templateUrl: path + 'timeline',  controller: 'ActionCtrl', controllerAs: 'Action', authenticate: auth })
      .when('/collapicka', {
        templateUrl: path + 'testCollapicka',  controller: 'TestCtrl', authenticate: auth })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
}());
