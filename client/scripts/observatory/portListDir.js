/**
 * @ngdoc directive
 * @name tornadoApp.directive:portList
 * @description
 * # portList
 */

(function(){
  'use strict';

  function portListDir(){
    return {
      templateUrl: '/scripts/observatory/views/portList.tpl.html',
      restrict: 'E',
      link: function () {}
    };
  }

  angular.module('observatoryMdl')
    .directive('portList', portListDir);

})();
