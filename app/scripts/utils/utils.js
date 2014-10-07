/**
 * Angular way is ng-repeat="(key, values) in x"
 */

// function formBuilder(obj){
//   var keys = [];
//   Object.keys(obj).forEach(function(key){
//     if (typeof obj[key] !== 'function')
//       keys.push(key);
//   })
//   return keys;
// }

angular.module('tornadoApp')
  .filter('capitalizeAdressKeys', function () {
    return function (input) {
        if (input === 'cp'){
          return 'Code Postal';
        }
        else if (input === undefined || input === null){
          return '';
        }
        else {
          return input.charAt(0).toUpperCase() + input.slice(1);
        }
    };
  })
