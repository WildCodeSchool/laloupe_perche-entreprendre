// ROUTES CONTACT
var Contact = require('../models/contact.js');
module.exports 	= function(app) {

	app.get('/contact', Contact.findAll);
    app.get('/contact/:id', Contact.findById);
	app.post('/contact', Contact.create);
	app.put('/contact/:id', Contact.update);
	app.delete('/contact/:id', Contact.delete);    
}
