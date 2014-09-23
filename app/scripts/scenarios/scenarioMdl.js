'use strict'

var SceModule = angular.module('scenarioMdl', []);

SceModule
  .config(['$routeProvider', function($routeProvider){
    var auth = false;
    var path = 'scripts/scenarios/views/';
    $routeProvider
      .when('/scenarios', {
        templateUrl: path + 'scenarios.tpl.html',  controller: 'ScenarioCtrl', authenticate: auth
      })
      .when('/scenario/:id', {
        templateUrl: path + 'scenario.tpl.html', controller: 'ScenarioCtrl', authenticate: auth
      })
      .when('/scenario', {
        templateUrl: path + 'scenarioForm.html', controller: 'ScenarioCtrl', authenticate: auth
      });
  }]);

