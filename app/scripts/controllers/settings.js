angular.module('compassApp').controller('SettingsCtrl', function ($scope, User, Auth,$http, SETTINGS_CONF, ApiPlaceholder) {

  $scope.errors = {};

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

  for (prop in SETTINGS_CONF)
  {
    if (!SETTINGS_CONF.hasOwnProperty(prop))
      continue;

    var section = angular.copy(SETTINGS_CONF[prop]);

    // expanding cols Array if genYears = true;
    if (section.hasOwnProperty('genYears') &&
       section.genYears === true)
    {
      var currentYear = new Date().getFullYear();
      var years = Array.apply(null, {length: 30}).map(function(curr, index){
        return ({name: currentYear + index});
      });
      section.cols = section.cols.concat(years);
      delete section.genYears;
    }

    // expanding rows array with data fetched from persistance API
    var tmp = ApiPlaceholder.get(section.url);
    angular.forEach(tmp, function(value, key){
      angular.extend(value, angular.fromJson(value.values));
      delete value.values;
      this.push(value);
    }, section.rows);
    // return TornadoApi.request('get', 'portfolio', {name: 'portfolio1'})

    // expanding section with row manipulation functions.
    // nota bene : could curry thoses bitches
    section.add = function(inserted){
      this.rows.push(inserted);
      ApiPlaceholder.post(this.url, {/* SOME DATA */});
    };

    section.remove = function(row){
      this.rows.splice(this.rows.indexOf(row), 1);
      ApiPlaceholder.del(this.url, { /* SOME TANGS */ });
    };

    section.update = function(index){
      console.log(index);
      ApiPlaceholder.update(this.url, { /* DEM TAMGS */ });
    };

    // finally, extend $scope with it.
    $scope[prop] = section;
  }

  // Hard adding of coefficient fixe de montage
  $scope.coeff = ApiPlaceholder.get('coeff');

  // Fluids section specific overridding
  angular.forEach($scope.fluids.rows, function(val){
    val.name = val.fluidType + ' (' + val.provider + ')';
    delete val.fluidType;
    delete val.provider;
  });

  delete $scope.fluids.add;
  $scope.fluids.add = function(inserted){
    $scope.newFluid = true;
    // Fetch a Provider
    var provider = $scope.choosenVendor.name;
    // Fetch a flui type
    var fluidType = $scope.choosenFluid.name;
    inserted.name = fluidType + ' (' + provider + ')';
    this.rows.push(inserted);
//    ApiPlaceholder.post(this.url, {});
//    $scope.newFluid = false;
  };


  // 
  

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
