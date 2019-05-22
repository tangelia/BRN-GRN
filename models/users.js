const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user = new Schema({
    
    name: String,
    email: String,
    username: { type : String , unique : true, required : true, dropDups: true },
});

    module.exports = mongoose.model('User', user);