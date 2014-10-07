'use strict';

angular.module('buildingMdl', ["ngRoute"])
  .config(function($routeProvider, $locationProvider, $httpProvider) {
    // change to true to turn on authentification
    var auth = false;
    var path = 'scripts/buildings/views/';
    var partials  = 'views/partials/';
    $routeProvider
      .when('/buildings', {
        templateUrl: path + 'buildings.tpl.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/buildings/:id', {
        templateUrl: path + 'buildingDetail.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/portfolios/:id/buildings', {
        templateUrl: path + 'buildings.tpl.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/portfolios/:id/building', {
        templateUrl: path + 'buildForm.tpl.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/leasetest', {
        templateUrl: path + 'leaseForm.tpl.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/graph', {
        templateUrl: partials + 'graph.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/actionForm', {
        templateUrl: partials + 'actionForm.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/schemaHome', {
        templateUrl: partials + 'schemaHome.html', controller: 'BuildingCtrl', authenticate: auth  });
  })
  .filter('buildingDetail', function(){
    return function(input) {
      var map = {
        buildings: 'Bâtiments',
        total_suface: 'Superficie Totale',
        occupation_rate: 'Taux d\'occupation',
        condition_index: 'Indice de vestuté',
        conformity_index: 'Indice de conformité',
        avg_performence: 'Performence moyenne',
        avg_age: 'Age moyen'
      }
      return map[input];
    }
  })
  .filter('buildingInfo', function(){
    return function(input) {
      var map = {
        construction_year: 'année de construction',
        control: 'controle', //{full: null, shared: null},
        user: 'utilisateur', //{own_use: null, rented: null},
        area_total: 'surface total',
        area_usefull: 'surface utile',
        floors: 'nombre de niveaux',
        parking_spaces: 'nombre de places de parking',
        parking_surface: 'surface de parking'
      }
      return map[input];
    }
  })
  .filter('deRestangularize', function(){
    return function(keys){
      var evil = ['singleOne', 'route', 'reqParams', 'fromServer', 'parentResource', 'restangularCollection']
      var filtered = [];
      angular.forEach(keys, function(key){
        if (evil.indexOf(key) === -1) {filtered.push(key)}
      })
      return filtered
    }
  })
