const express = require('express'), 
      bodyParser = require('body-parser'), 
      restful = require('node-restful'); 

const app = express(); 
const mongoose = restful.mongoose

mongoose.connect('mongodb://localhost/store'); 

app.use(bodyParser.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PUT, DELETE, OPTIONS, HEAD, PATCH");
    next();
}) 

const consign = require('consign'); 

consign({cwd:'app'})
    .include('models')
    .into(app); 

module.exports = app;

