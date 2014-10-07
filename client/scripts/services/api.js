angular.module('tornadoApp')
  .service('TornadoApi', function TornadoApi(User, $rootScope, Session, Auth, $location, $http, $q) {
    var url = "/crud/";
    return {
      request: function(method, module, data){
        var methodMaps = {
          get: function(){
              var queryParam="?";
              for (key in data) {
                  if(queryParam.length > 1){queryParam += "&";}

                  queryParam+= key + "="+data[key];
              }
              return queryParam;
          },
          put: function(){
              return "";
          },
          post: function(){
              return "";
          }
        };
        console.log(url+module+"/"+methodMaps[method](data));

        var defer = $q.defer();
        $http.jsonp("/" + url + "/" + module + "/" + methodMaps[method](data) + "&callback=JSON_CALLBACK")
        .success(function(data){
            defer.resolve(data)
        })
        .error(function(data){
            defer.reject('TornadoApi error');
        })
        return defer.promise;
      }
    }
  });
