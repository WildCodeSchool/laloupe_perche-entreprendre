// MODEL CONNEXION
var mongoose = require('mongoose');


var connexionSchema = new mongoose.Schema({
    userEmail: String,
    userMdp: String,
    description: String,
    userFunction: String,
    userNote: String,
    userEnterprise: String,
    userFirstname: String,
    userName: String,
    userPhone: String
});

var Connexion = {

    model: mongoose.model('Connexion', connexionSchema),

    create: function(req, res) {
        Connexion.model.create({
                userEmail: req.body.userEmail,
                userMdp: req.body.userMdp,
                description: req.body.description,
                userName: req.body.userName,
                userEnterprise: req.body.userEnterprise,
                userFunction: req.body.userFunction,
                userEmail: req.body.userEmail,
                userNote: req.body.userNote,
                userPhone: req.body.userPhone,
                userFirstname: req.body.userFirstname


            },
            function() {
                res.sendStatus(200);
            });
    },

    findAll: function(req, res) {
        Connexion.model.find(function(err, data) {
            res.send(data);
        });
    },

    update: function(req, res) {
        Connexion.model.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
            lastName: req.body.lastName,
            userFunction: req.body.userFunction,
            userEmail: req.body.userEmail,
            userNote: req.body.userNote
        }, function() {
            res.sendStatus(200);
        })
    },

    delete: function(req, res) {
        Connexion.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        })
    }
}


module.exports = Connexion;
