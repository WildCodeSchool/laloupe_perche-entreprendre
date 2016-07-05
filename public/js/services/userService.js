  // USER SERVICE
  function userService($http) {
      return {
          connect : function(data) {
            console.log(data);
              return $http.post('/login', data);
          },
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
          },
          lostpassword : function (email) {
            return $http.get('/lostpassword/' +email);
        }
      }
  };
