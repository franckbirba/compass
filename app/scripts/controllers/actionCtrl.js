
angular.module('compassApp')
  .controller('ActionCtrl', function ($scope, Auth) {
    $scope.droppedObjects = [];



    $scope.getPicto = function(){
      var pic = [
          'glyphicon glyphicon-asterisk',
          'glyphicon glyphicon-plus',
          'glyphicon glyphicon-euro',
          'glyphicon glyphicon-minus',
          'glyphicon glyphicon-cloud',
          'glyphicon glyphicon-envelope',
          'glyphicon glyphicon-pencil',
          'glyphicon glyphicon-glass',
          'glyphicon glyphicon-music',
          'glyphicon glyphicon-search'
      ];
      return pic[Math.floor((Math.random()*9))];
    };

    $scope.LINKEDACTIONS = [
      {
        name: 'action 1',
        img: $scope.getPicto(),
        date: "T3-2030",
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23,
        done: true,
        id: 1
      },
      {
        name: 'action 2',
        img: $scope.getPicto(),
        building: 'building 1',
        date: "T0-2030",
        cost: '20204.45',
        efficiency: 34,
        tri: 23,
        done: true,
        id: 2
      },
      {
        name: 'action 3',
        date: "T0-2030",
        img: $scope.getPicto(),
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23,
        done: true,
        id: 3
      },
      {
        name: 'action 4',
        img: $scope.getPicto(),
        date: "T3-2030",
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23,
        done: false,
        id: 4
      },
      {
        name: 'action 4',
        img: $scope.getPicto(),
        date: "T3-2030",
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23,
        done: false,
        id: 5
      },
      {
        name: 'action 5',
        img: $scope.getPicto(),
        date: "T1-2014",
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23,
        done: false,
        id: 6
      },
      {
        name: 'action 5',
        img: $scope.getPicto(),
        date: "T1-2014",
        building: 'building 3',
        cost: '20204.45',
        efficiency: 34,
        tri: 23,
        done: false,
        id: 7
      },
      {
        name: 'action 6',
        img: $scope.getPicto(),
        date: "T2-2015",
        building: 'building 1',
        cost: '20204.45',
        efficiency: 34,
        tri: 23,
        done: true,
        id: 8
      }
    ];



    $scope.stock={};
    var test = function() {
      for(action in $scope.LINKEDACTIONS) {
          var tmpAction = $scope.LINKEDACTIONS[action];

          if (!$scope.stock[tmpAction.date]) {
            $scope.stock[tmpAction.date] = {};
          }

          if(!$scope.stock[tmpAction.date][tmpAction.name]){
            $scope.stock[tmpAction.date][tmpAction.name] = [];
          }
            $scope.stock[tmpAction.date][tmpAction.name].push(tmpAction);
          }
    };
    test();
    
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

 
});