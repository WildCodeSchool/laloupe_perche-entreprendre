// MODEL CONTACT
var mongoose = require('mongoose');


var contactSchema = new mongoose.Schema({
    contactEmail: String,
    contactMdp: String,
    contactVille: String,
    contactFunction: String,
    contactNote: String,
    contactEnterprise: String,
    contactFirstname: String,
    contactName: String,
    contactPhone: String,
});

var Contact = {

    model: mongoose.model('Contact', contactSchema),

    create: function(req, res) {
      console.log(req.body);
        Contact.model.create(req.body,
            function(err) {
              if (!err) {
                res.sendStatus(200);
              } else {
                console.log(err);
              }
            });
    },

    findAll: function(req, res) {
        Contact.model.find(function(err, data) {
            res.send(data);
        });
    },

    update: function(req, res) {
        Contact.model.findByIdAndUpdate(req.params.id, req.body, function() {
            res.sendStatus(200);
        })
    },

    delete: function(req, res) {
        Contact.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        })
    }
}


module.exports = Contact;
