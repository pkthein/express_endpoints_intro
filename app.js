const express = require('express')
const app = express()
require('dotenv').config()
const myFunction = require('./routes/phyo.js')
const michaelRoute = require('./routes/michael.js')
const exchangeRoute = require('./routes/exchange.js')
const port = process.env.PORT_NUMBER || 80;

// app.use(express.static('./public'))

// app.use(express.json())

app.use((req, res, next) => {
  if (req.originalUrl !== '/favicon.ico') {
    console.log(`Original_URL: "${req.originalUrl}" and from IP: "${req.ip}"`)
  }
  next()
})

app.get('/', (req, res) => {
  res.send('Hello From Express!')
})

app.get('/phyo', myFunction)
app.use('/michael', michaelRoute)
app.use('/exchange', exchangeRoute)

app.get('*', (req, res) => {
  res.send('404 Page not Found!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})
