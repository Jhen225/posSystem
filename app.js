const PORT = 3000;
const ip = require('ip');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./configs/config.json');


mongoose.connect(config.database,{useMongoClient:true});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,'0.0.0.0',()=>{
    console.log('Server started on: ' + ip.address() + ':' + PORT);
});

