angular.module('compassApp').directive('timeline', function ($rootScope) {
  return {
        restrict: 'A',
        scope:{
          model: '='
        },
        templateUrl:'/views/directives/timeLine.html',
        controller: ['$scope', '$http', '$rootScope', 'Auth', 'MODELS', '$route',function($scope, $http, $rootScope, Auth, MODELS, $route){
          
          $scope.getPics = function(trim){
            var index = trim.name +"-"+trim.year;
            var pics = $scope.$parent.stock[index];
            if(pics) {
              return Object.keys(pics).length;
            } else {
              return "";
            }
            
          };
       $scope.onDropComplete=function(index, data, evt){
            console.log("DROPPING %s in %s",data.name,this.tmpTrim.name+" "+this.tmpTrim.year);
            var otherObj = $scope.TIMELINE[index];
            var otherIndex = $scope.TIMELINE.indexOf(data);
            // //debugger;
            $scope.TIMELINE[index] = data;
            $scope.TIMELINE[otherIndex] = otherObj;
            $scope.addActionToTrim(this.tmpTrim, data);
          };

          $scope.findPicto = function(trim, picto) {
            for(pic in trim.pictos) {
              if(pic == picto) {
                return pic;
              }
            }
            return null;
          };
          $scope.addActionToTrim = function(trim, action) {
            action.date = trim.id;

        $scope.$parent.genStock();
        $scope.TIMELINE = $scope.genTimeline();

          };

          $scope.genTimeline = function() {
          var tmpDate = new Date();
          var curYear = tmpDate.getFullYear();
          var maxYear = curYear + 30;
          var dates = [];
          for(cpt=0;cpt < maxYear - curYear + 1; cpt++) {
            var tmpYear = curYear+cpt;
            var pointDate = new Date(tmpYear, 0, 1),
            t = [
              new Date(tmpYear, 0, 1),
              new Date(tmpYear, 3, 1),
              new Date(tmpYear, 6, 1),
              new Date(tmpYear, 9, 1)
            ];
            var trim = [];
            for(i=0;i<4;i++){
              var tmpTrimIndex = "T"+i + "-" + tmpYear;
              var tmp = [];
              for( action in $scope.$parent.stock[tmpTrimIndex]){
                tmp.push({count:$scope.$parent.stock[tmpTrimIndex][action].length,img:$scope.$parent.stock[tmpTrimIndex][action][0].img});
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
        }]    

    }
});