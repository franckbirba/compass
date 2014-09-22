angular.module('tornadoApp').controller('SettingsCtrl', function ($scope, Restangular, $modal) {
/*
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
*/






  var currentYear = new Date().getFullYear();
  var years = Array.apply(null, {length: 30}).map(function(curr, index){
    return ({name: currentYear + index});
  });







  $scope.indices = {};
  $scope.indices.title = 'Indices';
  $scope.indices.icon = 'glyphicon glyphicon-tree-deciduous';
  $scope.indices.columns = [{name:'name'}];
  $scope.indices.columns = $scope.indices.columns.concat(years);

  var promise = Restangular.all('indices').getList();
  $scope.indices.rows = promise.$object;
  promise.then(function(all){
    // flattening retrieved data to make it work in listEdit directive
    angular.forEach($scope.indices.rows, function(rowData){
      var tmp = angular.extend(rowData, rowData.rows);
    });
  });

  $scope.indices.add = function(){
    var inserted = {};
    this.columns.forEach(function(elem){
       inserted[elem.name] = null;
    });

    var newEntry = {name: inserted.name};
    delete inserted.name;
    newEntry.rows = angular.copy(inserted);

    this.rows.post(newEntry).then(function(posted){
      $scope.indices.rows.push(posted);
    });
  };

  $scope.indices.remove = function(row){
    Restangular.one('indices', row._id).remove();
    this.rows.splice(this.rows.indexOf(row), 1);
  };

  $scope.indices.update = function(row, newVals){
    delete newVals.name;
    row.rows = angular.copy(newVals);
    row.put();
  };






  $scope.providers = {};
  $scope.providers.title = 'Providers';
  $scope.providers.icon = 'glyphicon glyphicon-tree-deciduous';
  $scope.providers.columns = [{name:'name'}];

  var promise = Restangular.all('providers').getList();
  $scope.providers.rows = promise.$object;

  $scope.providers.add = function(){
    var newEntry = {name: null};
    var promise = this.rows.post(newEntry).then(function(posted){
      $scope.providers.rows.push(posted);
    });
  };

  $scope.providers.remove = function(row){
    Restangular.one('providers', row._id).remove();
    this.rows.splice(this.rows.indexOf(row), 1);
  };

  $scope.providers.update = function(row, newVals){
    delete newVals.name;
    row.rows = angular.copy(newVals);
    row.put();
  };






  $scope.fluidtypes = {};
  $scope.fluidtypes.title = 'Fluid Types';
  $scope.fluidtypes.icon = 'glyphicon glyphicon-tree-deciduous';
  $scope.fluidtypes.columns = [{name:'name'}];

  var promise = Restangular.all('fluidtypes').getList();
  $scope.fluidtypes.rows = promise.$object;

  $scope.fluidtypes.add = function(){
    var newEntry = {name: null};
    var promise = this.rows.post(newEntry).then(function(posted){
      $scope.fluidtypes.rows.push(posted);
    });
  };

  $scope.fluidtypes.remove = function(row){
    Restangular.one('fluidtypes', row._id).remove();
    this.rows.splice(this.rows.indexOf(row), 1);
  };

  $scope.fluidtypes.update = function(row, newVals){
    delete newVals.name;
    row.rows = angular.copy(newVals);
    row.put();
  };










  $scope.fluids = {};
  $scope.fluids.title = 'Fluids';
  $scope.fluids.icon = 'glyphicon glyphicon-tree-deciduous';
  $scope.fluids.columns = [{name:'name'}];
  $scope.fluids.columns = $scope.fluids.columns.concat(years);

  var promise = Restangular.all('fluids').getList();
  $scope.fluids.rows = promise.$object;
  promise.then(function(all){
    // flattening retrieved data to make it work in listEdit directive
    angular.forEach($scope.fluids.rows, function(rowData){
      var tmp = angular.extend(rowData, rowData.rows);
    });
  });

  $scope.fluids.add = function () {
    var modalInstance = $modal.open({
      templateUrl: 'newFluidModal.html',
      controller: newFluidModalCtrl,
      resolve: {
        fluidtypes : function(){
          return $scope.fluidtypes.rows.map(function(val){
            return val.name;
          });
        },
        providers : function(){
          return $scope.providers.rows.map(function(val){
            return val.name;
          });
        }
      }
    });
    
    modalInstance.result.then(function(choosenFluid, choosenProvider){
      console.log('in results');
      $scope.choosenFluid = choosenFluid;
      $scope.choosenProvider = choosenProvider;
      console.log($scope.choosenFluid);
      console.log($scope.choosenVendor);
    });

    var inserted = {};
    this.columns.forEach(function(elem){
       inserted[elem.name] = null;
    });

    var newEntry = {name: inserted.name};
    delete inserted.name;
    newEntry.rows = angular.copy(inserted);

    this.rows.post(newEntry).then(function(posted){
      $scope.fluids.rows.push(posted);
    });

  };



  $scope.fluids.remove = function(row){
    Restangular.one('fluids', row._id).remove();
    this.rows.splice(this.rows.indexOf(row), 1);
  };

  $scope.fluids.update = function(row, newVals){
    delete newVals.name;
    row.rows = angular.copy(newVals);
    row.put();

//    this.rows[this.rows.indexOf(row)] = newVals;
//    this.rows.put();
  };


  var newFluidModalCtrl = function ($scope, $modalInstance, fluidtypes, providers) {

    $scope.choosenFluid = fluidtypes[0];
    $scope.choosenProvider = providers[0];
    $scope.fluidtypes = fluidtypes;
    $scope.providers = providers;

    $scope.ok = function () {
      console.log($scope.choosenFluid);
      console.log($scope.choosenVendor);
      $modalInstance.close($scope.choosenFluid, $scope.choosenProvider);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };
});
