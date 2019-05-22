require('dotenv').config();
const express = require('express')
const logger = require('morgan')
const app = express()

// const routes = require ('.routes/index')


app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/')


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/brngrn/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('BRN + GRN is up and running on port ' + PORT)
})