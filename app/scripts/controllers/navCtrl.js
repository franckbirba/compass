angular.module('tornadoApp').directive('compassnav', function ($rootScope) {
	return {
        restrict: 'A',
        scope:{
        	model: '='
        },
        templateUrl:'/views/directives/nav.html'
    }
});
