// ROUTES CONNEXIONS
var Connexion = require('../models/connexion.js');
module.exports = function (app) {

    app.get('/connexions', Connexion.findAll);
    app.post('/connexions', Connexion.create);
    app.put('/connexions/:id', Connexion.update);
    app.delete('/connexions/:id', Connexion.delete);

}
