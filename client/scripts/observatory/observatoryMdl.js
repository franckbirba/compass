(function(){
  'use strict';

  angular.module('observatoryMdl', ['ngRoute', 'restangular', 'tornadoConfig']);

  function printPortSummary(){
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
  };


  angular.module('observatoryMdl')
    .filter('printPortSummary', printPortSummary);

})();
