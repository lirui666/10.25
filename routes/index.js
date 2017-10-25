var express = require('express');
var router = express.Router();
var fs=require('fs')

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*')
  var temp=[];
  if(req.body.abc==1){
    temp=[1,2,3]
  }else{
    temp=[a,b,c]
  }

    res.send({'name':temp});


});

module.exports = router;