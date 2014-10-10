/**
 * @ngdoc directive
 * @name tornadoApp.directive:portForm
 * @description
 * # portForm
 */

(function(){
  'use strict';

  function portFormDir(){
    return {
      templateUrl: '/scripts/observatory/views/portForm.tpl.html',
      restrict: 'E',
      link: function () {}
    };
  }

  angular.module('observatoryMdl')
    .directive('portForm', portFormDir);

})();
