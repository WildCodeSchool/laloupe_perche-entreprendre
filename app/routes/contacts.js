// ROUTES CONTACTS
var Auth = require('../middlewares/authorization.js');
var Contact = require('../models/contact.js');
module.exports = function (app) {

    app.get('/contacts', Auth.user.hasAuthorization, Contact.findAll);
    app.get('/contactsfriendlist/:id', Auth.user.hasAuthorization, Contact.findList);
    app.post('/contacts', Contact.create);
    //app.put('/contacts/:id', Contact.update);
    app.delete('/contacts/:id', Auth.user.isAdministrator, Contact.delete);

}
