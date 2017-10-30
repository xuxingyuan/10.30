var express = require('express');
var router = express.Router();
var mysql= require('mysql');
var con= mysql.createPool({
	host     : 'localhost',
    user     : 'root',
    password : '123woaini',
    database : 'claxx'
})

/* GET home page. */

router.get('/list', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	con.query("SELECT id,name FROM xinwen",function(err,rows,fields){
		res.send(rows)
	} )
});

  router.get('/datel', function(req, res, next) {
  	var abc=req.body.abc;
  res.header("Access-Control-Allow-Origin", "*")
	con.query('SELECT centent FROM xinwen WHERE id='+abc,function(err, rows, fields) {
			res.send(rows)
 	});
});


module.exports = router;
