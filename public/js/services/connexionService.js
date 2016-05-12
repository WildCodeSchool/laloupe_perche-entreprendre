  // CONNEXION SERVICE
  function connexionService($http) {
      return {
          get : function() {
              return $http.get('/connexions');
          },
          update : function(id, data){
              return $http.put('/connexions/' + id, data);
          },
          create : function(data) {
              return $http.post('/connexions', data);
          },
          delete : function(id) {
              return $http.delete('/connexions/' + id);
          }
      }
  };
