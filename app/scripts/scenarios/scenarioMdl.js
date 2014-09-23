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
      })
      .when('/actions', {
        templateUrl: path + 'actions.tpl.html',  controller: 'ActionCtrl', authenticate: auth
      })
      .when('/apply', {
        templateUrl: path + 'actionApply.html',  controller: 'ActionCtrl', authenticate: auth
      })
      .when('/results', {
        templateUrl: path + 'actionResults.html',  controller: 'ActionCtrl', authenticate: auth
      })

  }]);

