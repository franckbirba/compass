angular.module('compassApp').directive('listedit', function ($rootScope) {
  return {
    restrict: 'A',
    scope:{
      data: '=data'
    },
    link: function(scope, element, attrs){
      scope.title = scope.data.title;
      scope.icon = scope.data.icon;
      scope.cols = scope.data.cols;
      scope.rows = scope.data.rows;

      scope.add = function(){
        scope.inserted = {};
        scope.cols.forEach(function(elem){
          scope.inserted[elem.name] = null;
        });
        /* todo : arrays insted of objects ? */
        scope.data.action(scope.inserted);
      };

      scope.save = function(data, row){};
    },
    templateUrl:'/views/directives/listedit.html'
  };
});
