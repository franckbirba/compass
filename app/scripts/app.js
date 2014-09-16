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
  'buildingMdl',
  'observatoryModule',
  'pascalprecht.translate',
  'rssServices'
])
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
      // .. to look for getList operations
      if (operation === "getList") {
        // .. and handle the data and meta data
        extractedData = response.data;
      }
      else if (operation === "post") {
        extractedData = response.data;
      }
      else {
        console.log(data);
        console.log(url);
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
