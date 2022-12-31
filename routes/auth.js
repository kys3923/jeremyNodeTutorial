const express = require('express');
const router = express.Router();

const{ getinfo, register } = require('../controllers/auth');

router.route('/getinfo').post(getinfo)
router.route('/register').post(register)

module.exports = router;