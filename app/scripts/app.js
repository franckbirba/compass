

angular.module('compassApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'models',
  'ui.bootstrap',
  'xeditable',
  'tableSort',
  'google-maps',
  'geocoder',
  'ngCollaPicka'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home',
       // controller: 'MainCtrl',
        authenticate: true
      })
      .when('/main', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl',
        authenticate: true
      })
      .when('/home', {
        templateUrl: 'partials/home',
      //  controller: 'MainCtrl',
        authenticate: true
      })
      .when('/observatory', { // css
        templateUrl: 'partials/userHome',
      //  controller: 'MainCtrl',
        authenticate: true
      })
      .when('/buildingDetail', { // css
        templateUrl: 'partials/buildingDetail',
      //  controller: 'MainCtrl',
        authenticate: true
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
        authenticate: true
      })
      .when('/building', {
        templateUrl: 'partials/buildingForm',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/building2', {
        templateUrl: 'partials/buildingFormGen2',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/building3', {
        templateUrl: 'partials/buildingFormBail1',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/building4', {
        templateUrl: 'partials/buildingFormBail2',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/building5', {
        templateUrl: 'partials/buildingFormBail3',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/building6', {
        templateUrl: 'partials/buildingFormBail4',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/building7', {
        templateUrl: 'partials/buildingFormBail5',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/building8', {
        templateUrl: 'partials/buildingFormBail6',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/graph', {
        templateUrl: 'partials/graph',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/actionForm', {
        templateUrl: 'partials/actionForm',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/scenario', {
        templateUrl: 'partials/scenario',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/schemaHome', {
        templateUrl: 'partials/schemaHome',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/actionList', {
        templateUrl: 'partials/actionList',
        controller: 'ActionCtrl',
        authenticate: true
      })
      .when('/scenarioList', { // css
        templateUrl: 'partials/scenarioList',
        controller: 'BuildingCtrl',
        authenticate: true
      })
      .when('/applyAction', { // css
        templateUrl: 'partials/applyAction',
        controller: 'ActionCtrl',
        authenticate: true
      })
      .when('/resultats', {
        templateUrl: 'partials/resultats',
        controller: 'ActionCtrl',
        authenticate: true
      })
      .when('/newScenario', { // css
        templateUrl: 'partials/newScenario',
        controller: 'ActionCtrl',
        authenticate: true
      })
      .when('/timeline', { // css
        templateUrl: 'partials/timeline',
        controller: 'ActionCtrl',
        authenticate: true
      })
      .when('/collapicka', { // css
        templateUrl: 'partials/testCollapicka',
        controller: 'TestCtrl',
        authenticate: true
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