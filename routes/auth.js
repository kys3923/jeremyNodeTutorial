const express = require('express');
const router = express.Router();

const { getinfo, register, getAccount, updateAccount, login } = require('../controllers/auth');

router.route('/register').post(register);
router.route('/viewAll').get(getinfo);
router.route('/view/:id').get(getAccount);
router.route('/update/:id').put(updateAccount)
router.route('/delete').delete()
router.route('/login').post(login)

module.exports = router;