// MODEL CONTACT
var mongoose = require('mongoose');

var validateEmail = function (userEmail) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var contactSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "ajout nom"]
    },
    userFirstname: {
        type: String,
        required: [true, "ajout prenom"]
    },
    userFunction: String,
    userEnterprise: String,
    userPhone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{2} \d{2} \d{2} \d{2} \d{2}/.test(v);
            },
            message: '{VALUE} numéro non valide !'
        }
    },
    userMdp: String,
    
    userEmail: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }
});

var Contact = {

    model: mongoose.model('Contact', contactSchema),

    create: function (req, res) {
        Contact.model.create({
            userName: req.body.userName,
            userFirstname: req.body.userFirstname,
            userFunction: req.body.userFunction,
            userEnterprise: req.body.userEnterprise,
            userPhone: req.body.userPhone,
            userMdp: req.body.userMdp,
            userEmail: req.body.userEmail
        }, function (err) {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.send(err);
            }
        })
    },

    findAll: function (req, res) {
        Contact.model.find(function (err, data) {
            res.send(data);
        });
    },
    
     findById: function (req, res) {
        Contact.model.findById(req.params.id,function (err, data) {
            res.send(data);
        });
    },

    update: function (req, res) {
        Contact.model.findByIdAndUpdate(req.params.id, {
            userName: req.body.userName,
            userFirstname: req.body.userFirstname,
            userFunction: req.body.userFunction,
            userEnterprise: req.body.userEnterprise,
            userPhone: req.body.userPhone,
            userMdp: req.body.userMdp,
            userEmail: req.body.userEmail
        }, function (err) {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.send(err);
            }
        })
    },

    delete: function (req, res) {
        Contact.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}

module.exports = Contact;