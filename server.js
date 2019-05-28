require('dotenv').config();

// //Middlewares
const bodyParser = require("body-parser");
const session = require('express-session');
const cors = require('cors');



  const express = require('express')
  const logger = require('morgan')
  const app = express()
  const routes = require('./routes.js')
  



 app.use(logger('dev'))
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());	


 app.use('/api/v1', routes)	


 // server.js	app.use('/', routes)


   app.use(express.static(`${__dirname}/brngrn/build`))	

 //   //below your api routes	
  // app.get('/*', (req, res) => {	
  //   res.sendFile(`${__dirname}/brngrn/build/index.html`)	
  // })	


 app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/brngrn/build/index.html`)
})


PORT = process.env.PORT || 3001




app.listen(PORT, () => {
  console.log('BRN + GRN is up and running on port ' + PORT)
})