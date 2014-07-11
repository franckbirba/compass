angular.module('compassApp')
  .service('Api', function Api(User, $rootScope, Session, Auth, $location,$http) {
      var url = "/crud/";
      return {
          request: function(method, module,data, callback){
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
                },
                delete: function(){
                    return "";
                }
              };

              $http.jsonp(url+module+"/"+methodMaps[method](data)+"&callback=JSON_CALLBACK")
              .success(function(data){
                  callback(data);
              })
              .error(function(data){
                  callback(data);
              })
          }
      }
  });