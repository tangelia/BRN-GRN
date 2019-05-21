require('dotenv').config();
const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello World")
})

// // server.js

//   app.use(express.static(`${__dirname}/brngrn/build`))

//   //below your api routes
//   app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/brngrn/build/index.html`)
//   })


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})