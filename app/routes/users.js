// ROUTES USERS
var Auth = require('../middlewares/authorization.js');
var User = require('../models/user.js');
module.exports = function (app) {

    app.get('/users', Auth.user.isAdministrator, User.findAll);
    app.get('/lostpassword/:email', User.lostpassword);
    app.post('/users', Auth.user.isAdministrator, User.create);
    app.post('/login', User.connect);
    app.get('/loggedin', Auth.user.hasAuthorization, function(req, res, next) {
        res.sendStatus(200);
	  });
    app.put('/users/:id', Auth.user.hasAuthorization, User.update);
    app.delete('/users/:id', Auth.user.isAdministrator, User.delete);

}
