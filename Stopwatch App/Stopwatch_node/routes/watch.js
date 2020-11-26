var express = require('express');
var router = express.Router();
var Watch = require('../models/Watch.js');
const Stopwatch = require('statman-stopwatch');
const stopwatch = new Stopwatch();



/*Start Timer */
router.get('/:action', function (req, res, next) {

    if (err) {
        res.status(500);
        return next(err);
    }

    if (req.params.action == 'start') {
        // stopwatch.start();
        // res.status(200).send(
        //     setInterval(function () {
        //         stopwatch.read()
        //     }, 1000)
        // );
        res.json({ 'hello': 'test' })
    }
    else if (req.params.action == 'stop') {
        // stopwatch.stop();
        res.status(200).send(stopwatch.stop()).sendStatus(200);
    }
    res.status(200);
});

// /*End Timer */
// router.get('/', function(req, res, next){
//     return setInterval(function(){
//         console.log('test');
//       }, 1000);      
// });

// /*Time Lapse */
// router.get('/', function(req, res, next){
//     return setInterval(function(){
//         console.log('test');
//       }, 1000);      
// });

module.exports = router;