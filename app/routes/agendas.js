// AGENDAS ROUTES
var Agenda = require('../models/agenda.js');
module.exports = function (app) {

    app.get('/agendas', Agenda.findAll);
    app.post('/agendas', Agenda.create);
    app.put('/agendas/:id', Agenda.update);
    app.delete('/agendas/:id', Agenda.delete);

}
