const User = require('../models/User');
const crypto = require('crypto');
const ErrorResponse = require('../utils/errorResponse');

exports.register = async (req, res) => {
  const { username, email, password, address, contact } = req.body;

    console.log(req.body)

  //validation
  if (!username || !email || !password) {
    res.status(400).json({
      success: false,
      error: 'provide all the information'
    })
  }

  const userExists = await User.findOne({ email })

  if (!!userExists) {
    res.status(400).json({
      success: false,
      error: 'Provided email already exists'
    })
  }

  // user creation
  try {
    const user = await User.create({
      username,
      email,
      password,
      address,
      contact,
    })

    sendToken(user, 201, res)
    // res.status(200).json({
    //   success: true,
    //   message: 'creation success'
    // })

  } catch (error) {
    console.log(error);
    // res.status(400).json({
    //   success: false,
    //   error: 'problem occured in DB'
    // })
  }

}

exports.getinfo = async(req, res) => {
  console.log(req.body);
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
    user: user,
  })
}