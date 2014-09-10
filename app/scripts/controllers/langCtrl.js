
angular.module('compassApp')
  .controller('LangCtrl', function ($scope, Auth, $location) {
    $scope.LANG = [
      {
        name: 'français',
        value: 'fr'
      },
      {
        name: 'english',
        value: 'en'
      }
    ];

    $scope.selectLang = $scope.LANG[0];
});