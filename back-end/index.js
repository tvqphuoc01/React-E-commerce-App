const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const port = 9000
require('dotenv').config()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var whitelist = [process.env.CORS];
var corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/', (req, res) => {
  res.send('Hello There!');
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})