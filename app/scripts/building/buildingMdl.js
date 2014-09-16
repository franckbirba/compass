'use strict';

angular.module('buildingMdl', ["ngRoute"])
  .config(function($routeProvider, $locationProvider, $httpProvider) {
    // change to true to turn on authentification
    var auth = false;
    var path = 'scripts/building/views/';
    $routeProvider
      .when('/buildings', {
        templateUrl: path + 'buildings.tpl.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/buildingDetail/:params', {
        templateUrl: path + 'buildingDetail.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building', {
        templateUrl: path + 'buildingFormGen1.html', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building2', {
        templateUrl: path + 'buildingFormGen2', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building3', {
        templateUrl: path + 'buildingFormBail1', controller: 'BuildingCtrl', authenticate: auth})
      .when('/building4', {
        templateUrl: path + 'buildingFormBail2', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building5', {
        templateUrl: path + 'buildingFormBail3', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building6', {
        templateUrl: path + 'buildingFormBail4', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building7', {
        templateUrl: path + 'buildingFormBail5', controller: 'BuildingCtrl', authenticate: auth })
      .when('/building8', {
        templateUrl: path + 'buildingFormBail6', controller: 'BuildingCtrl', authenticate: auth })
      .when('/graph', {
        templateUrl: path + 'graph', controller: 'BuildingCtrl', authenticate: auth })
      .when('/actionForm', {
        templateUrl: path + 'actionForm', controller: 'BuildingCtrl', authenticate: auth })
      .when('/scenario', {
        templateUrl: path + 'scenario', controller: 'BuildingCtrl', authenticate: auth })
      .when('/scenarioList', {
        templateUrl: path + 'scenarioList', controller: 'BuildingCtrl', authenticate: auth })
      .when('/schemaHome', {
        templateUrl: path + 'schemaHome', controller: 'BuildingCtrl', authenticate: auth  });
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
  });
