angular.module('compassApp').directive('timeline', function ($rootScope) {
	return {
        restrict: 'A',
        scope:{
        	model: '='
        },
        templateUrl:'/views/directives/timeLine.html',
        controller: ['$scope', '$http', '$rootScope', 'Auth', 'MODELS', '$route',function($scope, $http, $rootScope, Auth, MODELS, $route){
        	
        	$scope.stock = $scope.$parent.stock;

        	$scope.getPics = function(trim){
        		//console.log('GETPICS %O', arguments[0]);
        		var index = trim.name +"-"+trim.year;
        		//console.log($scope.stock[index],index);
        		var pics = $scope.stock[index];
        		if(pics) {
        			return Object.keys(pics).length;//"<p class=\""+trim.img+"\"><span class=\"badge\">"+pics.length+"</span></p>";
        		} else {
        			return "";
        		}
        		
        	};
		   $scope.onDropComplete=function(data,evt){
		        console.log("DROPPING %s in %s",data.name,this.tmpTrim.name+" "+this.tmpTrim.year);
		        //$scope.TIMELINE
		        $scope.addActionToTrim(this.tmpTrim, data);
		        
	        };

	        $scope.updateAction = function(action){
	        	console.log($scope.$parent);
	        };
	        $scope.addActionToTrim = function(trim, action) {
	        	for(yearIndex in $scope.TIMELINE) {
	        		var year = $scope.TIMELINE[yearIndex];
	        		for(tmpTrimIndex in year.t) {
	        			var tmpTrim = year.t[tmpTrimIndex];
	        			if(tmpTrim.id == trim.id){
	        				console.log("TRIM %O", tmpTrim);
	        				if(true){
	        					$scope.updateAction(action);
	        					tmpTrim.pictos.push({img:action.img,count:1});
	        				}
	        				
	        			}
	        		}
	        	}
	        };

        	$scope.genTimeline = function() {
			    var tmpDate = new Date();
			    console.log(tmpDate);
			    var curYear = tmpDate.getFullYear();
			    var maxYear = curYear + 30;
			    var dates = [];
			    console.log($scope.stock);
			    for(cpt=0;cpt < maxYear - curYear + 1; cpt++) {
			    	var tmpYear = curYear+cpt;
			      var pointDate = new Date(tmpYear, 0, 1),
			      t = [
			        new Date(tmpYear, 0, 1),
			        new Date(tmpYear, 3, 1),
			        new Date(tmpYear, 6, 1),
			        new Date(tmpYear, 9, 1)
			      ];
			      //pointDate.setYear(tmpYear);
			      var trim = [];
			      

				    for(i=0;i<4;i++){
				    	var tmpTrimIndex = "T"+i + "-" + tmpYear;
				    	var tmp = [];
				    	for( action in $scope.stock[tmpTrimIndex]){
				    		tmp.push({count:$scope.stock[tmpTrimIndex][action].length,img:$scope.stock[tmpTrimIndex][action][0].img});
				    	}
			            trim.push({
			              year: tmpYear,
			              name: "T"+i,
			              id: tmpTrimIndex,
			              pictos: tmp,
			              date: t[i].toString(),
			              timestamp: t[i].getTime()
			            })
			        }

			        dates.push({
			      	year: tmpYear,
			      	t: trim
			      })
			    }
			    return dates;
			  };
			  $scope.TIMELINE = $scope.genTimeline();
			  console.log($scope.TIMELINE);
			  
			  for (tmpTrim in $scope.stock) {
			  	console.log($scope.stock[tmpTrim]);
			  }

        }]		

    }
});