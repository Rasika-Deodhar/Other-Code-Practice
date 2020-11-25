var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Watch = require('../models/Watch.js');

/*Start Timer */
router.get('/', function(req, res, next){
    return setInterval(function(){
        console.log('test');
      }, 1000);      
});

/*End Timer */
router.get('/', function(req, res, next){
    return setInterval(function(){
        console.log('test');
      }, 1000);      
});

/*Time Lapse */
router.get('/', function(req, res, next){
    return setInterval(function(){
        console.log('test');
      }, 1000);      
});