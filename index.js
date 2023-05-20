const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', function (req, res) {
  res.send('Hello World fro host: ' + process.env.HOSTNAME)
})

app.listen(3000);
console.log('Server running on port 3000');