
// ROUTES CONNEXIONS
var Todo = require('../models/connexion.js');
module.exports = function (app) {

    app.get('/connexions', Todo.findAll);
    app.post('/connexions', Todo.create);
    app.put('/connexions/:id', Todo.update);
    app.delete('/connexions/:id', Todo.delete);

}
