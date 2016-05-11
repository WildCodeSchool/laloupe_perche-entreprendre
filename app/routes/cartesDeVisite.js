// ROUTES CARTE
var Carte = require('../models/carteDeVisite.js');
module.exports 	= function(app) {

	app.get('/carte', Carte.findAll);
    app.get('/carte/:id', Carte.findById);
	app.post('/carte', Carte.create);
	app.put('/carte/:id', Carte.update);
	app.delete('/carte/:id', Carte.delete);    
}
