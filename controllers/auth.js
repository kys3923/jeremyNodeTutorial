const User = require('../models/User');
const crypto = require('crypto');

exports.register = async (req, res) => {
  // informations form front-end
  const { username, email, password, address, contact } = req.body;

   console.log(req.body)

  // validation
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

  } catch (error) {
    console.log(error);
  }
}

exports.getinfo = async (req, res) => {

  try {
    const user = await User.find()

    res.json({
      message: 'sending user data',
      user
    })

  } catch (error) {
    console.log('error at getting db data')
  }
}

exports.getAccount = async (req, res) => {

  try {
    let foundUser = await User.find({"_id": req.params.id})
    res.json({
      status: 'success',
      foundUser
    })

  } catch (error) {
    res.json({
      status: 'fail',
      message: 'error at getting data from DB'
    })
  }
}

exports.updateAccount = async (req, res) => {
  const id = req.params.id
  const { username, email, contact, address } = req.body;

  try {
    let request = await User.findByIdAndUpdate(id,
      {
        username,
        email,
        address,
        contact
      } 
    )

    res.json({
      status: 'success',
      request
    })

  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: 'error at updating DB'
    })
  }
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
    user: user,
  })
}