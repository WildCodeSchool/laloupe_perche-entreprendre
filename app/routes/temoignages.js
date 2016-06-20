// ROUTES TEMOIGNAGES
var Auth = require('../middlewares/authorization.js');
var Temoignage = require('../models/temoignage.js');
module.exports = function (app) {

    app.get('/temoignages', Temoignage.findAll);
    app.post('/temoignages', Auth.user.isAdministrator, Temoignage.create);
    app.put('/temoignages/:id', Auth.user.isAdministrator, Temoignage.update);
    app.delete('/temoignages/:id', Auth.user.isAdministrator, Temoignage.delete);

}
