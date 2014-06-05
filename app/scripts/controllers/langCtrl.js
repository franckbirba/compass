
angular.module('compassApp')
  .controller('LangCtrl', function ($scope, Auth, $location) {
    $scope.LANG = [
      {
        name: 'français',
        value: 'eng'
      },
      {
        name: 'english',
        value: 'eng'
      }
    ];

    $scope.selectLang = $scope.LANG[0];


  });