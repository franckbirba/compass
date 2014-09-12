'use strict';

var ObsModule = angular.module('observatoryModule', []);

ObsModule.config(function ($routeProvider) {
  // change to true to turn on authentification
  var auth = false;

  $routeProvider
    .when('/observatory', {
      templateUrl: 'scripts/observatory/views/observatory.tpl.html',
      controller: 'ObservatoryCtrl',
      authenticate: auth
    })
})
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
      condition_index: 'Indice de cestuté',
      conformity_index: 'Indice de conformité',
      avg_performence: 'Performence moyenne',
      avg_age: 'Age moyen'
    }
    return map[input];
  }
})
