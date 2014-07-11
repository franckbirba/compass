angular.module('compassApp').directive('listedit', function ($rootScope) {
    return {
        restrict: 'A',
        scope:{
        	model: '='
        },
        templateUrl:'/views/directives/listedit.html',
        controller: ['$scope', '$http', '$rootScope', 'Auth', 'MODELS', '$route','Api',function($scope, $http, $rootScope, Auth, MODELS, $route, Api){
            //console.log("listedit", $scope, $scope.$parent.models);
            //$scope.models = sharedData.get('models');
            $rootScope.models = MODELS;
            $scope.models = $rootScope.models;
            /*sharedData.get('models').$watch($scope.model, function(newVal, oldVal){
                console.log(newVal, oldVal);
            });*/
			$scope.ngModel = $scope.models[$scope.model];
            $scope.title = $scope.ngModel.title;
            $scope.action = $scope.ngModel.action;

            $scope.getCls = function(row, cellname) {
                if($scope.states[row[cellname]])
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

            $scope.genYears = function(label, date) {
                var cols = [{name:"indice"}];
                if(!date) {
                    var tmpDate = new Date().getFullYear();
                    var cpt = 0,
                    Y = 30;
                    for(i=0;i<Y;i++){
                        cols.push({name:tmpDate++});
                    }
                }
                return cols;
            };
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

            // remove user
            $scope.removeData = function(index) {

                var data = $scope.ngModel.rows[index];
                console.log(data);
                delete data.$$hashKey;
                if(!data._id) {
                    $scope.ngModel.rows.splice(index, 1);
                    return;
                }
              
                $http.delete('/crud/'+$scope.ngModel.url+'/', {data:data,headers:{"Content-Type":"application/json"}}).success(function(){
                    //$scope.loadData();
                    //console.log("SUCCESS");
                    $scope.ngModel.rows.splice(index, 1);
                 //   $rootScope.updateAllModels();
                });
            };

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

            // add user
            $scope.addData = function() {
                $scope.inserted = {
                };
                for(var tmpCell in $scope.cols) {
                    $scope.inserted[tmpCell.name] = null;
                }
                $scope.ngModel.rows.push($scope.inserted);
            };

        }]
    }
})