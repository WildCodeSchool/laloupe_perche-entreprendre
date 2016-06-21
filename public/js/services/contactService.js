// CONTACT SERVICE
function contactService($http) {
    return {
        get : function() {
            return $http.get('/contacts');
        },
        getFriendList : function(id) {
            return $http.get('/contactsfriendlist/'+id);
        },
        update : function(id, data){
            return $http.put('/contacts/' + id, data);
        },
        create : function(data) {
            return $http.post('/contacts', data);
        },
        delete : function(id) {
            return $http.delete('/contacts/' + id);
        }
    }
};
