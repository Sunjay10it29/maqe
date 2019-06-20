var express = require('express');
var router = express.Router();
var moment = require('moment');


const path = require('path');

moment().format();

//Get home page
router.get('/', function(req, res, next) {
  res.sendFile(path.join(
    __dirname, '..', '..', 'client', 'views', 'index.html'));
});


module.exports = router;
