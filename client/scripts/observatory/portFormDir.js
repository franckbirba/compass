'use strict';

/**
 * @ngdoc directive
 * @name tornadoApp.directive:portForm
 * @description
 * # portForm
 */
angular.module('observatoryMdl')
  .directive('portForm', function () {
    return {
      templateUrl: '/scripts/observatory/views/portForm.tpl.html',
      restrict: 'E',
      link: function () {
        console.log('hello');
      }
    };
  });
