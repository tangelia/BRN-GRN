

const express = require('express');
const router = express();

//Controllers

//Set admin
const adminController = require('./controllers/admin-controller');
//Set cloudinary
const cloudinaryController = require('./controllers/cloudinary-controller');
//Set user
const userController = require('./controllers/user-controller');
//Set products
const productsController = require('./controllers/products-controller');


setTimeout(() => {

//   User Endpoint
//   Cloudinary images upload
//   router.get('/api/upload', cloudinaryController.upload);
  
  //Read the user's session.
  router.get('/api/user-data', userController.readUserData);
  
  //Add a item to cart
  router.post('/api/user-data/cart', userController.addToCart);
  
  //Remove a item from the cart.
  router.delete('/api/user-data/cart/:id',userController.removeFromCart);
  
  //User login
  router.get('/auth/callback', userController.login);
  // router.post('/api/login', userController.login)
  
  //User logout
  router.post('/api/logout', userController.logout);
  
  
  //Products Endpoints
  //Get all the products
  router.get('/api/products', productsController.readAllProducts);
  //Get a specified product
  
  router.get('/api/products/:id', productsController.readProduct);
  
  
//   Admin Endpoints
  //Get admin users.
  router.get('/api/users', adminController.getAdminUsers);
  
  //create product
  router.post('/api/products', adminController.createProduct);
  
  //Update current product
  router.put('/api/products/:id', adminController.updateProduct);
  
  //Delete product
  router.delete('/api/products/:id', adminController.deleteProduct);
  }, 200);

  module.exports = router