const restful = require('node-restful'); 
const mongoose = restful.mongoose; 

module.exports = app => {
    const Product = app.product = restful.model('products',mongoose.Schema({
        name:String,
        description:String, 
        img: String,  
        price: Number 
    })).methods(['get']); 

    Product.register(app,'/products'); 

    return Product; 
}

