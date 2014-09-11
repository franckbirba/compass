
angular.module('compassApp')
  .controller('HomeCtrl', function ($scope,RssList) {
    
    $scope.feeds = RssList.get();
    $scope.getTimeStamp = function(dateString){
      var tmpDate = new Date(dateString).getTime();
      return tmpDate;
    };
});