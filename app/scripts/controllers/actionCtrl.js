
angular.module('compassApp')
  .controller('ActionCtrl', function ($scope, Auth) {
    $scope.LINKEDACTIONS = [
      {
        name: 'action 1',
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23
      },
      {
        name: 'action 1',
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23
      },
      {
        name: 'action 1',
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23
      },
      {
        name: 'action 1',
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23
      },
      {
        name: 'action 1',
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23
      },
      {
        name: 'action 1',
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23
      }
    ];
   $scope.ACTIONS = [
    {
      name: "action 1"
    },
    {
      name: "action 2"
    },
    {
      name: "action 3"
    },
    {
      name: "action 4"
    },
    {
      name: "action 5"
    },
    {
      name: "action 1"
    },
    {
      name: "action 2"
    },
    {
      name: "action 3"
    },
    {
      name: "action 4"
    },
    {
      name: "action 5"
    },
    {
      name: "action 1"
    },
    {
      name: "action 2"
    },
    {
      name: "action 3"
    },
    {
      name: "action 4"
    },
    {
      name: "action 5"
    },
    {
      name: "action 1"
    },
    {
      name: "action 2"
    },
    {
      name: "action 3"
    },
    {
      name: "action 4"
    },
    {
      name: "action 5"
    }
  ];

  $scope.BUILDINGS = [
    {
      name: "building 1"
    },
    {
      name: "building 2"
    },
    {
      name: "building 3"
    },
    {
      name: "building 4"
    },
    {
      name: "building 5"
    },
    {
      name: "building 1"
    },
    {
      name: "building 2"
    },
    {
      name: "building 3"
    },
    {
      name: "building 4"
    },
    {
      name: "building 5"
    },
    {
      name: "building 1"
    },
    {
      name: "building 2"
    },
    {
      name: "building 3"
    },
    {
      name: "building 4"
    },
    {
      name: "building 5"
    },
    {
      name: "building 1"
    },
    {
      name: "building 2"
    },
    {
      name: "building 3"
    },
    {
      name: "building 4"
    },
    {
      name: "building 5"
    }
  ];

  $scope.genTimeline = function(){
    
  }
});