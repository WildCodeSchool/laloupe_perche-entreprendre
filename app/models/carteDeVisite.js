// MODEL CARTE DE VISITE
var mongoose = require('mongoose');

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var carteSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, "ajout nom"]
    },
    prenom: {
        type: String,
        required: [true, "ajout prenom"]
    },
    fonction: String,
    entreprise: String,
    telephone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{2} \d{2} \d{2} \d{2} \d{2}/.test(v);
            },
            message: '{VALUE} numéro non valide !'
        }
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }
});

var Carte = {

    model: mongoose.model('Carte', carteSchema),

    create: function (req, res) {
        Carte.model.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            fonction: req.body.fonction,
            entreprise: req.body.entreprise,
            telephone: req.body.telephone,
            email: req.body.email
        }, function (err) {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.send(err);
            }
        })
    },

    findAll: function (req, res) {
        Carte.model.find(function (err, data) {
            res.send(data);
        });
    },
    
     findById: function (req, res) {
        Carte.model.findById(req.params.id,function (err, data) {
            res.send(data);
        });
    },

    update: function (req, res) {
        Carte.model.findByIdAndUpdate(req.params.id, {
            nom: req.body.nom,
            prenom: req.body.prenom,
            fonction: req.body.fonction,
            entreprise: req.body.entreprise,
            telephone: req.body.telephone,
            email: req.body.email
        }, function (err) {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.send(err);
            }
        })
    },

    delete: function (req, res) {
        Carte.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}

module.exports = Carte;