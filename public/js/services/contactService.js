// CONTACT SERVICE
function contactService($http) {
    return {
        get : function() {
            return $http.get('/connexions');
        },
        update : function(id, data){
            return $http.put('/contacts/' + id, data);
        },
        create : function(data) {
            return $http.post('/connexions', data);
        },
        delete : function(id) {
            return $http.delete('/contacts/' + id);
        }
    }
};
