// AGENDAS ROUTES
var Auth = require('../middlewares/authorization.js');
var Agenda = require('../models/agenda.js');
module.exports = function (app) {

    app.get('/agendas', Agenda.findAll);
    app.post('/agendas', Auth.user.isAdministrator, Agenda.create);
    app.put('/agendas/:id', Auth.user.isAdministrator, Agenda.update);
    app.delete('/agendas/:id', Auth.user.isAdministrator, Agenda.delete);

}
