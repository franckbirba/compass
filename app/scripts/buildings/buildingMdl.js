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
      .when('/building/:id', {
        templateUrl: path + 'buildingDetail.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/portfolio/:id/buildings', {
        templateUrl: path + 'buildings.tpl.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/portfolio/:id/building', {
        templateUrl: path + 'buildForm.tpl.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/graph', {
        templateUrl: partials + 'graph.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/actionForm', {
        templateUrl: partials + 'actionForm.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/scenario', {
        templateUrl: partials + 'scenario.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/scenarioList', {
        templateUrl: partials + 'scenarioList.html', controller: 'BuildingCtrl', authenticate: auth })
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
