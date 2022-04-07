const express = require('express');
const mongoose = require("mongoose");
const app = express();

var bodyParser = require('body-parser');
var cors = require('cors');

require('dotenv').config()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Connect DATABASE
mongoose.connect(process.env.MONGO_DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;

// Checking DB connection
db.on('error', () => console.error('Database connection failed'));
db.once('open', async () => {
  console.info('Database connection established...');
});

// CORS
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

app.use(express.static('public'));

const indexRoute = require('./routers/index');

app.use('/', indexRoute);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})