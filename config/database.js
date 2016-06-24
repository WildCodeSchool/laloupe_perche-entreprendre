// DATABASE CONFIG
var mongoose = require('mongoose');
module.exports = mongoose.connect(process.en.MONGODB_URI || 'mongodb://localhost/Perche-Entreprendre');

