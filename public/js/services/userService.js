  // USER SERVICE
  function userService($http) {
      return {
          get : function() {
              return $http.get('/users');
          },
          update : function(id, data){
              return $http.put('/users/' + id, data);
          },
          create : function(data) {
              return $http.post('/users', data);
          },
          delete : function(id) {
              return $http.delete('/users/' + id);
          }
      }
  };
