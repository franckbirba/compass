

angular.module('tornadoApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$http.get('/bower_components/sb-admin/js/plugins/metisMenu/jquery.metisMenu.js').success(function(awesomeThings) {

      eval(awesomeThings);
		$http.get('/bower_components/sb-admin/js/plugins/morris/morris.js').success(function(awesomeThings) {
		      eval(awesomeThings);
		       $http.get('/bower_components/sb-admin/js/sb-admin.js').success(function(awesomeThings) {
			      eval(awesomeThings);
			      $http.get('/bower_components/sb-admin/js/demo/dashboard-demo.js').success(function(awesomeThings) {
				      eval(awesomeThings);
				    });
			    });
		    });
	    });

  });
