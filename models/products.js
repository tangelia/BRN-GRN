const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const product = new Schema({
    title: String,
    img: String,
    price: Number,
    company: String,
    info: String
    });

    module.exports = mongoose.model('Product', product);


    
    