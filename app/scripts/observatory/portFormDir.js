'use strict';

/**
 * @ngdoc directive
 * @name tornadoApp.directive:portForm
 * @description
 * # portForm
 */
angular.module('tornadoApp')
  .directive('portForm', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the portForm directive');
      }
    };
  });
