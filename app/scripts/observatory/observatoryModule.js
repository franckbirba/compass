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
      batiments: 'Bâtiments',
      superficie_total: 'Superficie Totale',
      taux_occupation: 'Taux d\'occupation',
      indice_vestute: 'Indice de cestuté',
      indice_conformite: 'Indice de conformité',
      perf_moyenne: 'Performence moyenne',
      age_moyen: 'Age moyen'
    }
    return map[input];
  }
})
