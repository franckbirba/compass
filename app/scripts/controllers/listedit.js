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
      scope.predicate = scope.cols[1].name;

      scope.add = function(){
        /* 
         * dont know why but inserted has to be made in the 
         * directive scope rather then settings scope in 
         * order for editable-form to work 
         */
        scope.inserted = {};
        scope.cols.forEach(function(elem){
          scope.inserted[elem.name] = null;
        });
        /* todo : arrays insted of objects ? */
        scope.data.add(scope.inserted);
      };
      scope.save = function(data, row){};

      scope.stringifyIt = function(it){
        return it.toString();
      };

      scope.stringifyPredicate = function(predicate){
        return scope.predicate.toString();
      };

      scope.getSortIcon = function(column){
        console.log(scope.reverse);
        if (column != scope.predicate)
          return ('fa-sort');
        else if (scope.reverse)
          return ('fa-sort-desc');
        else
          return ('fa-sort-asc');
      };
    },
    templateUrl:'/views/directives/listedit.html'
  };
});
