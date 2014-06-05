
angular.module('compassApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
