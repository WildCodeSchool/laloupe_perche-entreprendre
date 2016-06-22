// AGENDA SERVICE
function agendaService($http) {
    return {
        get : function() {
            return $http.get('/agendas');
        },
        update : function(id, data){
            return $http.put('/agendas/' + id, data);
        },
        create : function(data) {
            return $http.post('/agendas', data);
        },
        delete : function(id) {
            return $http.delete('/agendas/' + id);
        }
    }
};
