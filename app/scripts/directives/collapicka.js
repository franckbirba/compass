/**
 * Collapicka
 * ng directive
 * input data
 * @Int range-from (default 0), @Int range-to (default 100), @Int range-step (default 1), @Int position (default 0)
 */

angular.module('ngCollaPicka', []).directive('ngCollaPicka', function(){
  var defaults = {
    rangeFrom: 0,
    rangeTo: 100,
    rangeStep: 1,
    startPosition: 0
  };

  return {
      restrict: 'AE',
      scope: {
        rangeFrom: '@',
        rangeTo: '@',
        rangeStep: '@',
        startPosition: '@',
        position: '='
      },
      template: '<div style="padding: 10px"><div class="collapicka-background" style="position: relative; width: 50px; height: 200px; background: #ccc; border: 1px solid; cursor: pointer;">'
      +'<div class="collapicka-cursor" style="position: absolute; top: {{offsetTop}}px; left: -10px; color: red;"> -> </div></div>',
      link: function(scope, iElement, iAttrs) {
        for (var prop in defaults) {
          if (defaults.hasOwnProperty(prop) && iAttrs.hasOwnProperty(prop) && typeof iAttrs[prop] !== 'undefined') {
            defaults[prop] = iAttrs[prop];
          }
        }
        var innerH = $('.collapicka-background').innerHeight() - $('.collapicka-cursor').innerHeight(),
          k = innerH / ( defaults.rangeTo - defaults.rangeFrom );

        scope.offsetTop = innerH - defaults.startPosition * k;

        $('.collapicka-cursor').draggable({
          containment: 'parent',
          axis: 'y',
          grid: [ 0, defaults.rangeStep ],
          stop: function( event, ui ) {
            var pos = ui.position.top;
            scope.$apply('position = ' + Math.ceil( (innerH - pos) / k ));
          }
        });
      }
  };
});