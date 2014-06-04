'use strict';

angular.module('compassApp')
  .controller('LangCtrl', function ($scope, Auth, $location) {
    $scope.LANG = [
      {
        name: 'english',
        value: 'eng'
      },
      {
        name: 'français',
        value: 'eng'
      }
    ];

    $scope.selectLang = $scope.LANG[0];
    
  });