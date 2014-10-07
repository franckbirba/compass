'use strict';

var ObsModule = angular.module('observatoryMdl', ['ngRoute', 'restangular', 'tornadoConfig']);

ObsModule.config(['$routeProvider', function($routeProvider) {
  // change to true to turn on authentification
  var auth = false;
  var path = 'scripts/observatory/views/';
  $routeProvider
    .when('/observatory', {
      templateUrl: path + 'observatory.tpl.html', controller: 'ObservatoryCtrl', authenticate: auth });

}])
.filter('printPortSummary', function () {
  return function (input) {
    var map = {
      buildings:        'Bâtiments',
      total_surface:     'Superficie Totale',
      occupation_rate:  'Taux d\'occupation',
      condition_idx:    'Indice de vestuté',
      conformity_idx:   'Indice de conformité',
      avg_performance:  'Performence moyenne',
      avg_age:          'Age moyen'
    }
    return map[input];
  }
})
