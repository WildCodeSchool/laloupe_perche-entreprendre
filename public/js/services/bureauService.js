// BUREAU SERVICE
  function bureauService($http) {
    return {
        get : function() {
            return $http.get('/bureaux');
        },
        update : function(id, data){
            return $http.put('/bureaux/' + id, data);
        },
        create : function(data) {
            return $http.post('/bureaux', data);
        },
        delete : function(id) {
            return $http.delete('/bureaux/' + id);
        }
    }
};
