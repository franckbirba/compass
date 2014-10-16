(function(){

'use strict';
  var Resolve = {
    'something': ['Restangular', '$route', function(Restangular, $route){
      console.log('from resolve');
      console.log( $route.current.params.id);
      return Restangular
        .one('portfolios', $route.current.params.id)
        .all('buildings')
        .getList()
    }],
    'bar': ['$q', '$timeout', function($q, $timeout){
      console.log('from bar')
      var defer = $q.defer();
      $timeout(function(){
        defer.resolve('bar has replied')
      }, 2000);
      return defer.promise
    }]
  }

  function BuildingCfg($routeProvider, $locationProvider, $httpProvider){
    // change to true to turn on authentification
    var auth = false;
    var path = 'scripts/buildings/views/';
    var partials  = 'views/partials/';
    $routeProvider
      .when('/buildings', {
        templateUrl: path + 'buildings.tpl.html',
        controller: 'BuildingCtrl',
        authenticate: auth })
      .when('/buildings/:id', {
        templateUrl: path + 'buildingDetail.html',
        controller: 'BuildingCtrl',
        authenticate: auth })
      .when('/portfolios/:id/buildings', {
        templateUrl: path + 'buildings.tpl.html',
        controller: 'BuildingCtrl',
        resolve: {
          something: Resolve.something,
          bar: Resolve.bar
        },
        authenticate: auth })
      .when('/portfolios/:id/building', {
        templateUrl: path + 'buildForm.tpl.html',
        controller: 'BuildingCtrl',
        authenticate: auth })
      .when('/leasetest', {
        templateUrl: path + 'leaseForm.tpl.html',
        controller: 'BuildingCtrl',
        authenticate: auth })
      .when('/graph', {
        templateUrl: partials + 'graph.html',
        controller: 'BuildingCtrl',
        authenticate: auth })
      .when('/actionForm', {
        templateUrl: partials + 'actionForm.html',
        controller: 'BuildingCtrl',
        authenticate: auth })
      .when('/schemaHome', {
        templateUrl: partials + 'schemaHome.html',
        controller: 'BuildingCtrl',
        authenticate: auth  });

  }
  BuildingCfg.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', 'ResolveSvcProvider'];

  angular.module('buildingMdl').
    config(BuildingCfg);
})();
