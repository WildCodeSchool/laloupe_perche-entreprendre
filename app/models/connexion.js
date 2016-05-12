// MODEL CONNEXION
var mongoose = require('mongoose');


var connexionSchema = new mongoose.Schema({
    description: String,
    lastName: String,
    userFunction: String,
    userEmail: String,
    userNote: String
});

var Connexion = {

    model: mongoose.model('Connexion', connexionSchema),

    create: function (req, res) {
        Connexion.model.create({
            description: req.body.description,
            lastName: req.body.lastName,
            userFunction: req.body.userFunction,
            userEmail: req.body.userEmail,
            userNote: req.body.userNote
        }, function () {
            res.sendStatus(200);
        })
    },

    findAll: function (req, res) {
        Connexion.model.find(function (err, data) {
            res.send(data);
        });
    },

    update: function (req, res) {
        Connexion.model.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
            lastName: req.body.lastName,
            userFunction: req.body.userFunction,
            userEmail: req.body.userEmail,
            userNote: req.body.userNote
        }, function () {
            res.sendStatus(200);
        })
    },

    delete: function (req, res) {
        Connexion.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}


module.exports = Connexion;