// AGENDA MODEL
var mongoose = require('mongoose');


var agendaSchema = new mongoose.Schema({
    agendaImg: String,
    agendaTitle: String,
    agendaDescription: String,
    agendaDate: Date,
    agendaCity: String,
    agendaHour: Date,
    agendaPrice: String,
    agendaLink: String,
});

var Agenda = {

    model: mongoose.model('Agenda', agendaSchema),

    create: function(req, res) {
      console.log(req.body);
        Agenda.model.create(req.body,
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
        Agenda.model.find(function(err, data) {
            res.send(data);
        });
    },


    update: function(req, res) {
      console.log(req.body);
      console.log(req.params);
        Agenda.model.findByIdAndUpdate(req.params.id, req.body, function() {
            res.sendStatus(200);
        })
    },

    delete: function(req, res) {
        Agenda.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        })
    }
}


module.exports = Agenda;
