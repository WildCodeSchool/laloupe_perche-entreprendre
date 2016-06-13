// MODEL USER
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    userEmail: String,
    userMdp: String,
    userVille: String,
    userFunction: String,
    userNote: String,
    userEnterprise: String,
    userImg: String,
    userFirstname: String,
    userName: String,
    userPhone: String,
});

var User = {

    model: mongoose.model('User', userSchema),

    create: function(req, res) {
        User.model.create(req.body,
            function() {
                res.sendStatus(200);
            });
    },

    findAll: function(req, res) {
        User.model.find(function(err, data) {
            res.send(data);
        });
    },

    
    findById: function(id, cb){
        User.model.findById(id, function(err, data) {
            console.log(data);
            cb(data);
        });
    },
    
    update: function(req, res) {
        User.model.findByIdAndUpdate(req.params.id, req.body, function(err) {
            if (err){
              console.log(err);
              res.sendStatus(500)
            } else {
              res.sendStatus(200);
            }
        })
    },

    delete: function(req, res) {
        User.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        })
    }
}


module.exports = User;
