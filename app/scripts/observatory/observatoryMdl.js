'use strict';

var ObsModule = angular.module('observatoryMdl', ['ngRoute', 'restangular', 'tornadoConfig']);

ObsModule.config(['$routeProvider', function($routeProvider) {
  // change to true to turn on authentification
  var auth = false;
  var path = 'scripts/observatory/views/';
  $routeProvider
    .when('/observatory', {
      templateUrl: path + 'observatory.tpl.html', controller: 'ObservatoryCtrl', authenticate: auth })
    .otherwise({ redirectTo: '/observatory' })
}])
.filter('capitalizeAdressKeys', function () {
  return function (input) {
      if (input === 'cp'){
        return 'Code Postal';
      }
      else {
        return input.charAt(0).toUpperCase() + input.slice(1);
      }
  };
})
.filter('printPortSummary', function () {
  return function (input) {
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
