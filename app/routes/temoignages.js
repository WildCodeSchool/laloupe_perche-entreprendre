// ROUTES TEMOIGNAGES
var Temoignage = require('../models/temoignage.js');
module.exports = function (app) {

    app.get('/temoignages', Temoignage.findAll);
    app.post('/temoignages', Temoignage.create);
    app.put('/temoignages/:id', Temoignage.update);
    app.delete('/temoignages/:id', Temoignage.delete);

}
