
angular.module('tornadoApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
