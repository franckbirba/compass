'use strict';

angular.module('compassApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'Config',
  'models',
  'ui.bootstrap',
  'xeditable',
  'tableSort',
  'google-maps',
  'geocoder',
  'ngCollaPicka',
  'observatoryModule',
  'pascalprecht.translate',
  'rssServices'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    // change to true to turn on authentification
    var auth = false;

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home',
       // controller: 'MainCtrl',
        authenticate: auth
      })
      .when('/main', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl',
        authenticate: auth
      })
      .when('/home', {
        templateUrl: 'partials/home',
      //  controller: 'MainCtrl',
        authenticate: auth
      })
      .when('/buildingDetail', { // css
      	templateUrl: 'partials/buildingDetail',
        //  controller: 'MainCtrl',
        authenticate: auth
      })
      .when('/login', {
      	templateUrl: 'partials/login',
      	controller: 'LoginCtrl'
      })
      .when('/signup', {
      	templateUrl: 'partials/signup',
      	controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: auth
      })
      .when('/building', {
        templateUrl: 'partials/buildingFormGen1',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building2', {
        templateUrl: 'partials/buildingFormGen2',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building3', {
        templateUrl: 'partials/buildingFormBail1',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building4', {
        templateUrl: 'partials/buildingFormBail2',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building5', {
        templateUrl: 'partials/buildingFormBail3',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building6', {
        templateUrl: 'partials/buildingFormBail4',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building7', {
        templateUrl: 'partials/buildingFormBail5',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building8', {
        templateUrl: 'partials/buildingFormBail6',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/graph', {
        templateUrl: 'partials/graph',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/actionForm', {
        templateUrl: 'partials/actionForm',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/scenario', {
        templateUrl: 'partials/scenario',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/schemaHome', {
        templateUrl: 'partials/schemaHome',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/actionList', {
        templateUrl: 'partials/actionList',
        controller: 'ActionCtrl',
        authenticate: auth
      })
      .when('/scenarioList', { // css
        templateUrl: 'partials/scenarioList',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/applyAction', { // css
        templateUrl: 'partials/applyAction',
        controller: 'ActionCtrl',
        authenticate: auth
      })
      .when('/resultats', {
        templateUrl: 'partials/resultats',
        controller: 'ActionCtrl',
        authenticate: auth
      })
      .when('/newScenario', { // css
        templateUrl: 'partials/newScenario',
        controller: 'ActionCtrl',
        authenticate: auth
      })
      .when('/timeline', { // css
        templateUrl: 'partials/timeline',
        controller: 'ActionCtrl',
        controllerAs: 'Action',
        authenticate: auth

      })
      .when('/collapicka', { // css
        templateUrl: 'partials/testCollapicka',
        controller: 'TestCtrl',
        authenticate: auth
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
  })
.run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });
