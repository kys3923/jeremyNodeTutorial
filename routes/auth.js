const express = require('express');
const router = express.Router();

const { getinfo, register, getAccount } = require('../controllers/auth');

router.route('/register').post(register);
router.route('/viewAll').get(getinfo);
router.route('/view/:id').get(getAccount);
router.route('/update').put()
router.route('/delete').delete()

module.exports = router;