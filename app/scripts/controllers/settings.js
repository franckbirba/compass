

angular.module('compassApp')
  .controller('SettingsCtrl', function ($scope, User, Auth,$http) {
    $scope.errors = {};
$http.get('/bower_components/sb-admin/js/plugins/metisMenu/jquery.metisMenu.js').success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;

      eval(awesomeThings);
    $http.get('/bower_components/sb-admin/js/plugins/morris/morris.js').success(function(awesomeThings) {
          $scope.awesomeThings = awesomeThings;
          eval(awesomeThings);
           $http.get('/bower_components/sb-admin/js/sb-admin.js').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            eval(awesomeThings);
            
          });
        });
      });

   // $scope.
    $scope.changePassword = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
          $location.path('/');
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
        });
      }
		};
  });
