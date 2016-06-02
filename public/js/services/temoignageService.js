// TEMOIGNAGE SERVICE
  function temoignageService($http) {
    return {
        get : function() {
            return $http.get('/temoignages');
        },
        update : function(id, data){
            return $http.put('/temoignages/' + id, data);
        },
        create : function(data) {
            return $http.post('/temoignages', data);
        },
        delete : function(id) {
            return $http.delete('/temoignages/' + id);
        }
    }
};
