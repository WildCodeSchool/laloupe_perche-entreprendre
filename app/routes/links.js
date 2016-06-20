// LINKS ROUTES
var Auth = require('../middlewares/authorization.js');
var Links = require('../models/link.js');
module.exports = function (app) {

    app.get('/links', Links.findAll);
    app.post('/links', Auth.user.isAdministrator, Links.create);
    app.put('/links/:id', Auth.user.isAdministrator, Links.update);
    app.delete('/links/:id', Auth.user.isAdministrator, Links.delete);

}
