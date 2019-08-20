var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 3000;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1/hospitalDB', { useNewUrlParser: true, }, function(err) {
    if (err) console.log(err);
    else
 console.log("db connected");
    });
 

app.listen(port, function() {
    console.log("App Run Successfully" + port);
});
 require('./app/routes')(app);
// exports = module.exports = app;