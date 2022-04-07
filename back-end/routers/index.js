const express = require('express');
const router = express.Router();

const regularRoute = require('./regular/regular');
// const apiRoute = require('./api');

/* GET home page. */

// router.use('/api', apiRoute);

router.use('/', regularRoute);

module.exports = router;