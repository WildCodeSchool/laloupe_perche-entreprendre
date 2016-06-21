// LINK SERVICE
function linkService($http) {
    return {
        get : function() {
            return $http.get('/links');
        },
        update : function(id, data){
            return $http.put('/links/' + id, data);
        },
        create : function(data) {
            return $http.post('/links', data);
        },
        delete : function(id) {
            return $http.delete('/links/' + id);
        }
    }
};
