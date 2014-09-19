'use strict';

angular.module('buildingMdl', ["ngRoute"])
  .config(function($routeProvider, $locationProvider, $httpProvider) {
    // change to true to turn on authentification
    var auth = false;
    var path = 'scripts/buildings/views/';
    $routeProvider
      .when('/buildings', {
        templateUrl: path + 'buildings.tpl.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building/:id', {
        templateUrl: path + 'buildingDetail.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/portfolio/:id/buildings', {
        templateUrl: path + 'buildings.tpl.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building', {
        templateUrl: path + 'buildingFormGen1.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building2', {
        templateUrl: path + 'buildingFormGen2.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building3', {
        templateUrl: path + 'buildingFormBail1.html', controller: 'BuildingCtrl', authenticate: auth})
      .when('/building4', {
        templateUrl: path + 'buildingFormBail2.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building5', {
        templateUrl: path + 'buildingFormBail3.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building6', {
        templateUrl: path + 'buildingFormBail4.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building7', {
        templateUrl: path + 'buildingFormBail5.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building8', {
        templateUrl: path + 'buildingFormBail6.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/graph', {
        templateUrl: path + 'graph.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/actionForm', {
        templateUrl: path + 'actionForm.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/scenario', {
        templateUrl: path + 'scenario.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/scenarioList', {
        templateUrl: path + 'scenarioList.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/schemaHome', {
        templateUrl: path + 'schemaHome.html', controller: 'BuildingCtrl', authenticate: auth  });
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
