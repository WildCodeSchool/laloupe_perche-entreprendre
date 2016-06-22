// ROUTES BUREAUX
var Auth = require('../middlewares/authorization.js');
var Bureau = require('../models/bureau.js');
module.exports = function (app) {

    app.get('/bureaux', Bureau.findAll);
    app.post('/bureaux', Auth.user.isAdministrator, Bureau.create);
    app.put('/bureaux/:id', Auth.user.isAdministrator, Bureau.update);
    app.delete('/bureaux/:id', Auth.user.isAdministrator, Bureau.delete);

}
