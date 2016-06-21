// BUREAU MODEL
var mongoose = require('mongoose');


var bureauSchema = new mongoose.Schema({
    bureauImg: String,
    bureauSecteur: String,
    bureauDescription: String,
    bureauType: String,
    bureauSurface: String,
    bureauPrice: String,
});

var Bureau = {

    model: mongoose.model('Bureau', bureauSchema),

    create: function(req, res) {
      console.log(req.body);
        Bureau.model.create(req.body,
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
        Bureau.model.find(function(err, data) {
            res.send(data);
        });
    },

    update: function(req, res) {
      console.log(req.body);
      console.log(req.params);
        Bureau.model.findByIdAndUpdate(req.params.id, req.body, function() {
            res.sendStatus(200);
        })
    },

    delete: function(req, res) {
        Bureau.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        })
    }
}


module.exports = Bureau;
