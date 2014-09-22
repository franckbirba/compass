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
      transclude: true,
      template: '<h1>HERE</h1>',
      // templateUrl: '/scripts/observatory/views/portForm.tpl.html',
      restrict: 'EA',
      link: function () {
        console.log('hello');
      }
    };
  });
