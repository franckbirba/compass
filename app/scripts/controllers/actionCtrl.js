(function(){
  'use strict';
  angular
    .module('compassApp')
    .controller('ActionCtrl', ActionCtrl);

  ActionCtrl.$inject = ['$scope', 'Auth', 'actionService', 'buildingService', 'timelineCalculationService'];

  function ActionCtrl($scope, Auth, actionService, buildingService, timelineCalculationService) {

      var vm = this;
      // mini-model actions
      vm.actions = {
        data: [],
        getByBuildingId: function(buildingId) {
          return buildingId && buildingId !== -1
            ? _.filter(vm.actions.data, function(a) {
                return a.building === buildingId;
              })
            : vm.actions.data
        }
      };
      vm.buildings = [];

      vm.currentBuilding = -1;
      vm.onBuildingChange = function(buildingId) {
        vm.currentBuilding = buildingId;
      }

      vm.overallStats = timelineCalculationService.overallCostTRIEconomie();
      // refresh page on building change
      // instead of million watchers
      // update overall stats
      // graphs
      function refreshPage() {
        vm.overallStats = timelineCalculationService.overallCostTRIEconomie(vm.actions.getByBuildingId( vm.currentBuilding ));
      }
      $scope.$watch(function() { 
        return vm.currentBuilding;
      }, function(newVal, oldVal){
        refreshPage();
      });
      // load timeline page
      activate();

      function activate() {
        getActions().then(function(){
          console.info('Actions Loaded');
          refreshPage();
        });

        getBuildings().then(function(){
          console.info('Buildings loaded');
        });
      }

      function getActions() {
        return actionService.getActions()
            .then(function(data){
              vm.actions.data = data;
              return vm.actions;
            });
      }

      function getBuildings() {
        return buildingService.getBuildings()
          .then(function(response){
            vm.buildings = response.data;
            return vm.buildings;
          });
      }
      

      // OLD CODE
      $scope.droppedObjects = [];

      $scope.getPicto = function(index){
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
        return pic[index];
      };

      $scope.LINKEDACTIONS = [
        {
          name: 'action 1',
          img: $scope.getPicto(1),
          date: "T3-2030",
          building: 'building 1',
          cost: '20204.45',
          efficiency: 34,
          tri: 23,
          done: true,
          id: 1,
          type: 1,
          isPlanified: false
        },
        {
          name: 'action 2',
          img: $scope.getPicto(2),
          building: 'building 1',
          date: "T0-2030",
          cost: '20204.45',
          efficiency: 34,
          tri: 23,
          done: true,
          id: 2,
          type: 2,
          isPlanified: true
        },
        {
          name: 'action 3',
          date: "T0-2030",
          img: $scope.getPicto(3),
          building: 'building 1',
          cost: '20204.45',
          efficiency: 34,
          tri: 23,
          done: true,
          id: 3,
          type: 3,
          isPlanified: false
        },
        {
          name: 'action 4',
          img: $scope.getPicto(4),
          date: "T3-2030",
          building: 'building 1',
          cost: '20204.45',
          efficiency: 34,
          tri: 23,
          done: false,
          id: 4,
          type: 4,
          isPlanified: true
        },
        {
          name: 'action 4',
          img: $scope.getPicto(4),
          date: "T3-2030",
          building: 'building 1',
          cost: '20204.45',
          efficiency: 34,
          tri: 23,
          done: false,
          id: 5,
          type: 4,
          isPlanified: true
        },
        {
          name: 'action 5',
          img: $scope.getPicto(5),
          date: "T1-2014",
          building: 'building 1',
          cost: '20204.45',
          efficiency: 34,
          tri: 23,
          done: false,
          id: 6,
          type: 5,
          isPlanified: true
        },
        {
          name: 'action 5',
          img: $scope.getPicto(5),
          date: "T1-2014",
          building: 'building 3',
          cost: '20204.45',
          efficiency: 34,
          tri: 23,
          done: false,
          id: 7,
          type: 5,
          isPlanified: false
        },
        {
          name: 'action 6',
          img: $scope.getPicto(6),
          date: "T2-2015",
          building: 'building 1',
          cost: '20204.45',
          efficiency: 34,
          tri: 23,
          done: true,
          id: 8,
          type: 6,
          isPlanified: false
        }
      ];
      // showPlanifiedActions - filtering actions by planified/non-planified
      // 0 - all, 1 - planified, -1 - non planified
      $scope.showPlanifiedActions = 0;
      $scope.LINKEDACTIONS.getByIsPlanified = function(isPlanified) {
        var filtered = []
          , filterBy;
        if ( typeof isPlanified === 'undefined' || isPlanified === 0) {
          filtered = this;
        } else {
          filterBy = !!(isPlanified === 1);
          this.forEach(function(a){
            if (a.isPlanified === filterBy) {
              filtered.push(a);
            }
          });
        }
        return filtered;
      }
      $scope.linkedactionsFiltered = $scope.LINKEDACTIONS.getByIsPlanified();

      $scope.$watch('showPlanifiedActions', function(newVal){
        $scope.linkedactionsFiltered = $scope.LINKEDACTIONS.getByIsPlanified(newVal);
      });

      $scope.stock={};

  }
  
}());