var ActionsRecipe = function(ReferenceActions, Restangular) {
  var Actions = {};

  Actions.all = [];
  Actions.dataReady = Restangular.all('actions').getList();

/*  Restangular.all('actions').post({
      ref:"542a6561df330339029e9c15",
      mask: {name: "hunt"}
  });*/
/*  Restangular.one('actions', "542ac556df330339029e9c35").remove();*/

  // mettre tout ca dans le then() de la promesse de ReferenceActionCatalogue ???
  Actions.dataReady.then(function(res){
    console.log(Actions.all);
    Actions.all = res.map(function(action){
      newAction = Object.create(ReferenceActions.get(action.ref));
      for (prop in action.mask)
          newAction[prop] = action.mask[prop];
      newAction.building = action.building;
      newAction._id = action._id;
      return newAction;
    });
  });

  return Actions;
};

ActionsRecipe.$inject = ['ReferenceActions', 'Restangular'];

angular.module('scenarioMdl')
  .factory('Actions', ActionsRecipe);
