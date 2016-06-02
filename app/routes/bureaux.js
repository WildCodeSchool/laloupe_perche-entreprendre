// ROUTES BUREAUX
var Bureau = require('../models/bureau.js');
module.exports = function (app) {

    app.get('/bureaux', Bureau.findAll);
    app.post('/bureaux', Bureau.create);
    app.put('/bureaux/:id', Bureau.update);
    app.delete('/bureaux/:id', Bureau.delete);

}
