const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3333
const db = require('./queries')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use('/:id', express.static( __dirname + '/../client/dist'))
app.use(bodyParser.json())

app.get('/listings/:id', db.getReviewsById)

app.use((req, res, next) => {
  res.sendStatus(404)
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message)
})

app.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})