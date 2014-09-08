angular.module('compassApp').controller('SettingsCtrl', function ($scope, $rootScope, User, Auth,$http, MODELS) {

  $scope.errors = {};

  $http.get('/bower_components/sb-admin/js/plugins/metisMenu/jquery.metisMenu.js')
    .success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      eval(awesomeThings);
      $http.get('/bower_components/sb-admin/js/plugins/morris/morris.js')
        .success(function(awesomeThings) {
          $scope.awesomeThings = awesomeThings;
          eval(awesomeThings);
          $http.get('/bower_components/sb-admin/js/sb-admin.js')
            .success(function(awesomeThings) {
              $scope.awesomeThings = awesomeThings;
              eval(awesomeThings);    
            });
        });
    }
  );

  $scope.changePassword = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
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
    
  $rootScope.models = MODELS;
  $scope.models = $rootScope.models;



	$scope.indices = $scope.models['indices'];

  var currentYear = new Date().getFullYear();
  $scope.indices.cols = Array.apply(null, {length: 30}).map(function(curr, index){
    return ({name: currentYear + index});
  });
  $scope.indices.cols.unshift({name:"indice"});

  $scope.indices.add = function(inserted){
    $scope.indices.rows.push(inserted);
  };

  $scope.indices.remove = function(index){
    $scope.indices.rows.splice(index, 1);
  };



	$scope.fluids = $scope.models['fluids'];

  var currentYear = new Date().getFullYear();
  $scope.fluids.cols = Array.apply(null, {length: 30}).map(function(curr, index){
    return ({name: currentYear + index});
  });
  $scope.fluids.cols.unshift({name:"fluids"});

  $scope.fluids.add = function(inserted){
    $scope.fluids.rows.push(inserted);
  };

  $scope.fluids.remove = function(index){
    $scope.fluids.rows.splice(index, 1);
  };



	$scope.fluidType = $scope.models['fluidType'];
  $scope.fluidType.cols = [{name:"FluidType"}];


/*
  $scope.getCls = function(row, cellname) {
    if ($scope.states[row[cellname]])
                    return $scope.states[row[cellname]].cls;
                return $scope.states[false].cls;
  };

  $scope.loadData = function() {
                return Api.request("get", $scope.ngModel.url, {type:$scope.ngModel.url}, function(data){
                    $scope.ngModel.rows = data;
                })
            };

        	$rootScope.$watch('dataLoaded', function(newVal, oldVal){
                $scope.models = $rootScope.models;
                $scope.ngModel = $scope.models[$scope.model];
        	      $scope.loadData();
                //  $rootScope.updateAllModels();
                // $route.reload();
        	});
            $scope.loadData();


           if ($scope.ngModel.genYears)
                $scope.ngModel.cols = $scope.genYears();

            $scope.saveData = function(data, row) {
		//	    var projectId = $rootScope.currentProject._id;
                //$scope.user not updated yet
                angular.extend(data, {
                    _id: row._id,
         //           userId: row.userId ? row.userId : Auth.user.username,
            //        projectId: row.projectId ? row.projectId : projectId,
                    type: $scope.ngModel.url
                });
              //  console.log(data);
                $http.post('/crud/'+$scope.ngModel.url+'/', data).success(function(){
                    //$scope.loadData();
                    //console.log("SUCCESS");
                 //   $rootScope.updateAllModels();
                });
            };

*/
/*
     $scope.showLink = function(type, row) {
       //    console.log("LINK %O, %O", type, row);
       var selected = [];
			 var models = $rootScope.models;
       angular.forEach(models[type.link].rows, function(s) {
         //console.log(s._id, $scope.ngModel.rows);
         //console.log(s, type.name, row[type.name]);
         if (row[type.name] && row[type.name].indexOf(s._id) >= 0) {
           selected.push(s.name);
         }
       });
       return selected.length ? selected.join(', ') : 'Not set';
     };
*/
  });
