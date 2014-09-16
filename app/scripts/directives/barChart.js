angular.module('tornadoApp').directive('barchart', function ($rootScope) {
	return {
        restrict: 'A',
        scope:{
        	model: '='
        },
        templateUrl:'/views/directives/barChart.html'
    }
});
