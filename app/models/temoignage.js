// TEMOIGNAGE MODEL
var mongoose = require('mongoose');


var temoignageSchema = new mongoose.Schema({
    temoignageImg: String,
    temoignageSecteur: String,
    temoignageDescription: String,
    temoignageAge: String,
    temoignageName: String,
    temoignageFunction: String,
    temoignageFirstname: String,
});

var Temoignage = {

    model: mongoose.model('Temoignage', temoignageSchema),

    create: function(req, res) {
      console.log(req.body);
        Temoignage.model.create(req.body,
            function(err, data) {
              if (!err) {
                console.log(data);
                res.sendStatus(200);
              } else {
                console.log(err);
              }
            });
    },


    findAll: function(req, res) {
        Temoignage.model.find(function(err, data) {
            res.send(data);
        });
    },

    update: function(req, res) {
      console.log(req.body);
      console.log(req.params);
        Temoignage.model.findByIdAndUpdate(req.params.id, req.body, function() {
            res.sendStatus(200);
        })
    },

    delete: function(req, res) {
        Temoignage.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        })
    }
}


module.exports = Temoignage;
