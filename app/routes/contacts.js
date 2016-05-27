// ROUTES CONTACTS
var Contact = require('../models/contact.js');
module.exports = function (app) {

    app.get('/contacts', Contact.findAll);
    app.post('/contacts', Contact.create);
    app.put('/contacts/:id', Contact.update);
    app.delete('/contacts/:id', Contact.delete);

}
