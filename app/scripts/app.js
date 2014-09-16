'use strict';

angular.module('tornadoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'tornadoConfig',
  'ui.bootstrap',
  'xeditable',
  'tableSort',
  'google-maps',
  'geocoder',
  'ngCollaPicka',
  'restangular',
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
      	templateUrl: 'scripts/observatory/views/buildingDetail',
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
        templateUrl: 'scripts/observatory/views/',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building2', {
        templateUrl: 'scripts/observatory/views/',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building3', {
        templateUrl: 'scripts/observatory/views/',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building4', {
        templateUrl: 'scripts/observatory/views/',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building5', {
        templateUrl: 'scripts/observatory/views/',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building6', {
        templateUrl: 'scripts/observatory/views/',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building7', {
        templateUrl: 'scripts/observatory/views/',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/building8', {
        templateUrl: 'partials/buildingFormBail6',
        controller: 'BuildingCtrl',
        authenticate: auth
      })
      .when('/graph', {
        templateUrl: 'partials/ ',
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
  })
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/crud');
    RestangularProvider.setRestangularFields({ id: "_id" });
    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      var extractedData;
      console.log(operation);
      // .. to look for getList operations
      if (operation === "getList") {
        // .. and handle the data and meta data
        extractedData = response.data;
      }
      else if (operation === "post") {
        extractedData = response.data;
      }
      else {
        extractedData = response.data;
      }
      return extractedData;
    });
    // RestangularProvider.addRequestInterceptor(function(element, operation, what, url){

    //   console.log(element);
    //   console.log(operation);
    //   console.log(what);
    //   console.log(url);

    //   return url
    // })
    // RestangularProvider.addFullRequestInterceptor(function(headers, params, element, httpConfig){
    //   console.log(headers);
    //   console.log(params);
    //   console.log(element);
    //   console.log(httpConfig);
    // });
    // RestangularProvider.setErrorInterceptor(function(response, deferred, responseHandler) {
    //   if(response.status === 404) {
    //     console.log(response);
    //     console.log(deferred);
    //   };
    //   return true; // error not handled
    // });
  });
