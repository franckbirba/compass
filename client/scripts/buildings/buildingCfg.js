(function(){

'use strict';
  var Resolve = {
    'model': ['Restangular', function(Restangular){
      return Restangular.one('models').get({name: 'Model'});
    }],
    'index':['Restangular', '$route', 'BuildingSvc', function(Restangular, $route, BuildingSvc){
      if (_.has($route.current.params, 'id')){
        var portfolio_id = $route.current.params.id;
        return Restangular
          .one('portfolios', portfolio_id)
          .all('buildings')
          .getList().$object;
      }
      else {
        return BuildingSvc.getList().$object;
      }
    }],
    'show': ['$route', 'BuildingSvc', function($route, BuildingSvc){
      var one = BuildingSvc.one($route.current.params.id).get();
      return one;
    }]
  }

  function BuildingCfg($routeProvider, $locationProvider, $httpProvider){
    // change to true to turn on authentification
    var auth = false;
    var path = 'scripts/buildings/views/';
    var partials  = 'views/partials/';
    $routeProvider
      // Index all users buildings
      .when('/buildings', {
        templateUrl: path + 'buildings.tpl.html',
        controller: 'BuildingCtrl',
        resolve: Resolve,
        authenticate: auth })
      // Show single building
      .when('/buildings/:id', {
        templateUrl: path + 'buildingDetail.html',
        controller: 'BuildingCtrl',
        resolve: Resolve,
        authenticate: auth })
      // Index all portfolio buildings
      .when('/portfolios/:id/buildings', {
        templateUrl: path + 'buildings.tpl.html',
        controller: 'BuildingCtrl',
        resolve: Resolve,
        authenticate: auth })
      // Create new building belonging to port
      .when('/portfolios/:id/building', {
        templateUrl: path + 'buildForm.tpl.html',
        controller: 'BuildingCtrl',
        resolve: Resolve,
        authenticate: auth })
      // Index new leases
      .when('/buildings/:id/leases', {
        templateUrl: 'scripts/buildings/leases/views/leaseForm.tpl.html',
        controller: 'LeaseCtrl',
        resolve: Resolve,
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
  BuildingCfg.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

  angular.module('buildingMdl').
    config(BuildingCfg);
})();
