var mongoose = require('mongoose');
var WatchSchema = new mongoose.Schema({
    startTime: any,
    stopTime: any,
    timeLapse: any
});

module.exports = mongoose.model('Watch', WatchSchema);
