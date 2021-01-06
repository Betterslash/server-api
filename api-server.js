var express = require('express');
var app = express();
var cors = require('cors');
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({limit: '10mb'}));
app.options('*',cors());
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/login', function (req, res) {
    console.log(req.body);
    res.send(req.body)
  })
  
 app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
