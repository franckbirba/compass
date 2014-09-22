angular.module('tornadoApp')
  .controller('TestRestCtrl', function($scope, Restangular){

    $scope.getList = Restangular.all('buildings').getList().$object;

    $scope.ListPut = function(elem){
      console.log('ListPut elem');
      console.log(elem);
      elem.name = 'FaboulousAbs';
      elem.put();
    }
    $scope.ListDel = function(elem){
      elem.remove();
    }
    $scope.ListCreate = function(params){
      params = {
        name: 'from ListCreate',
      }
      $scope.getList.post(params);
    }

    /* Restangular one:
    ** - cannot assign directly
    ** - .one() is not a promise
    ** - but .one().get() is a promise, and needs to be used.
    ** - .get() requires .data
    ** - cannot use post on resolved get() !!!
    ** - but you can post on original.one() !!!
    */

    // $scope.one = Restangular.one('buildings', id).get();
    var id = '541c595aa8a50d800d917f05';
    var original = Restangular.one('buildings', id);
    original.get().then(function(res){
      $scope.one = res.data;

      $scope.OnePut = function(elem){
        console.log($scope.one);
        original.name = 'a thrid modification';
        original.put();
        // res.name = 'trying';
        // res._id = id;
        // res.put();
      }
    })

  });
  /*
  ** TRY OVERRIDING
  */
  // .config(function(RestangularProvider) {
  //   RestangularProvider.setBaseUrl('/crud');
  //   RestangularProvider.setRestangularFields({id: "_id"});
  //   RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
  //     var extractedData;
  //     console.log('From RESPONSE');
  //     console.log('THE ' + operation + ' OP is called with url: ' + url);
  //     if (operation === "getList"){
  //       extractedData = response.data;
  //     }
  //     // }
  //     else {
  //       extractedData = response;
  //     }
  //     return extractedData;
  //   })

    // RestangularProvider.addRequestInterceptor(function(element, operation, what, url){
    //   var data, requestObj;
    //   if (element && element.hasOwnProperty(0)){
    //     data = element[0];
    //     element = element[0];
    //     url = url + '/' + element._id;
    //   }
    //   else
    //     data = 'nothing changed';

    //   console.log('From REQUEST');
    //   console.log('THE ' + operation + ' OP is called with url: ' + url);
    //   console.log('request elem is: '); console.log(data);
    //   console.log(url);
    //   return element;
    // });
    // RestangularProvider.addFullRequestInterceptor(function(headers, params, element, httpConfig){
    //   console.log(headers);
    //   console.log(params);
    //   console.log(element);
    //   console.log(httpConfig);
    // });
    // RestangularProvider.setErrorInterceptor(function(response, deferred, responseHandler) {
    //   if(response.status === 404) {
    //     console.log(response);
    //     console.log(deferred);
    //   };
    //   return true; // error not handled
    // });
  // });



