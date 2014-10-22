'use strict';

angular.module('tornadoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMessages',
  'tornadoConfig',
  'ui.bootstrap',
  'xeditable',
  'tableSort',
  'google-maps'.ns(), // resolves to uiGmapgoogle-maps
  'geocoder',
  'ngCollaPicka',
  'restangular',      // called with RestangularProvider
  'autoform',         // tchatel autoform
  'buildingMdl',
  'observatoryMdl',
  'scenarioMdl',
  'pascalprecht.translate',
  'rssServices'
])
  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  })
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    // change to true to turn on authentification
    var auth = false;
    var path = 'partials/';

    $routeProvider
      .when('/', {
        templateUrl: path + 'home', controller: '', authenticate: auth})
      .when('/actionForm', {
        templateUrl: path + 'actionForm', controller: '', authenticate: auth})
      .when('/scenarioList', {
        templateUrl: path + 'scenarioList', controller: '', authenticate: auth})
      .when('/login', {
        templateUrl: path + 'login',  controller: 'LoginCtrl' })
      .when('/signup', {
        templateUrl: path + 'signup', controller: 'SignupCtrl' })
      .when('/main', {
        templateUrl: path + 'main',  controller: '', authenticate: auth })
      .when('/home', {
        templateUrl: path + 'home',  controller: '', authenticate: auth })
      .when('/schemaHome', {
        templateUrl: path + 'schemaHome',  controller: '', authenticate: auth })
      .when('/collapicka', {
        templateUrl: path + 'testCollapicka',  controller: 'TestCtrl', authenticate: auth })
      .when('/test', {
        templateUrl: path + 'test',  controller: 'TestRestCtrl', authenticate: auth })
      .when('/timeline', {
        templateUrl: path + 'timeline',  controller: 'ActionController', controllerAs: 'Action', authenticate: auth
      })

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
  });
