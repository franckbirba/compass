'use strict';

angular.module('tornadoApp')
  .directive('appnav', function ($rootScope) {
	return {
        restrict: 'EA',
        // scope:{
        // 	model: '='
        // },
        templateUrl:'/views/directives/nav.html'
    }
});
