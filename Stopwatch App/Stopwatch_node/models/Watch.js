var mongoose = require('mongoose');
var WatchSchema = new mongoose.Schema({
    startTime: String,
    stopTime: String,
    timeLapse: String
});

module.exports = mongoose.model('Watch', WatchSchema);
