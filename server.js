require('dotenv').config();

//Middlewares
const bodyParser = require("body-parser");
const session = require('express-session');
const cors = require('cors');

//Controllers

//Set admin
const adminController = require('./controllers/admin_controller');
//Set cloudinary
const cloudinaryController = require('./controllers/cloudinary_controller');
//Set user
const userController = require('./controllers/user_controller');
//Set products
const productsController = require('./controllers/products_controller');

const mongoose = require('mongoose');
const express = require('express');
const app = express();

//Connect to MongoDB


mongoose.connect(process.env.MONGODB_URI, (err) => {
if(err) {
console.log('Database Error', err);
}
console.log('Connected to database');
});

//Middleware 
app.use(bodyParser.json());
    
//Store cookies for user
app.use(session({

    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

//Allow cross origin requests.
app.use(cors());

setTimeout(() => {

// User Endpoint
//Cloudinary images upload
// app.get('/api/upload', cloudinaryController.upload);

// //Read the user's session.
// app.get('/api/user-data', userController.readUserData);

// //Add a item to cart
// app.post('/api/user-data/cart', userController.addToCart);

// //Remove a item from the cart.
// app.delete('/api/user-data/cart/:id',userController.removeFromCart);

//User login
app.get('/auth/callback', userController.login);
// app.post('/api/login', userController.login)

//User logout
app.post('/api/logout', userController.logout);


//Products Endpoints
//Get all the products
app.get('/api/products', productsController.readAllProducts);
//Get a specified product

app.get('/api/products/:id', productsController.readProduct);


//Admin Endpoints
//Get admin users.
app.get('/api/users', adminController.getAdminUsers);

//create product
app.post('/api/products', adminController.createProduct);

//Update current product
app.put('/api/products/:id', adminController.updateProduct);

//Delete product
app.delete('/api/products/:id', adminController.deleteProduct);
}, 200);




const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('BRN + GRN is up and running on port ' + PORT)
})