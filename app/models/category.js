const restful = require('node-restful'); 
const mongoose = restful.mongoose; 

module.exports = app => {
    const Category = app.category = restful.model('categories',mongoose.Schema({
        name:String
    })).methods(['get']); 

    Category.register(app,'/categories'); 

    return Category; 
}