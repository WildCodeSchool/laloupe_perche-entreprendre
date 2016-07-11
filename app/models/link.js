// LINK MODEL
var mongoose = require('mongoose');


var linkSchema = new mongoose.Schema({
    linkName: String,
    linkValue: String,
});

var Links = {

    model: mongoose.model('Links', linkSchema),

    create: function(req, res) {
        Links.model.create(req.body,
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
        Links.model.find(function(err, data) {
            res.send(data);
        });
    },


    update: function(req, res) {
        Links.model.findByIdAndUpdate(req.params.id, req.body, function() {
            res.sendStatus(200);
        });
    },

    delete: function(req, res) {
        Links.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        });
    }
};


module.exports = Links;
