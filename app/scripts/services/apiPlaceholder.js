angular.module('compassApp')
  .service('ApiPlaceholder', function Receipe($q) {
    return {
      data : {
               fluids:[
                    {
                        'fluidType':'PissWasser',
                        'provider':'MeinkenPiss',
                        'values':'{"2014":"13", "2015":"222"}'
                    },
                    {
                        'fluidType':'BiruJin',
                        'provider':'Nipponorror',
                        'values':'{"2018":"1", "2013":"2875"}'
                    }
               ],
               indices : [
                    {'name':'indice1', 'values':'{"2015":"13", "2019":"222", "2018":"33"}'},
                    {'name':'indice2', 'values':'{"2018":"1", "2013":"2875"}'},
                    {'name':'indice3', 'values':'{"2014":"666"}'}
               ],
               fluidtype : [
                    {'name':'Chaleur'},{'name':'Electricite'},{'name':'Eau'}
               ],
               provider : [
                    {'name':'EDF'},
                    {'name':'GDF'},
                    {'name':'Suez'}
               ],
               coeff : [{
                   'classique':'54',
                   'PPP':'5'
               }]
      },
      get : function(url){
        if (this.data.hasOwnProperty(url))
          return this.data[url];
      },
      post : function(url, data){
        if (this.data.hasOwnProperty(url))
          this.data[url].push(data);
      },
      del : function(url, dem_tangs){
        if (this.data.hasOwnProperty(url))
          return ;
//        this.data[url].splice(index, 1);
      }
    };
  });
