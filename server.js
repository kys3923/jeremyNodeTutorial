// import
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

connectDB();

// definitions
const app = express(); // express 실행

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: 'server is working'
  })
})

// controllers
app.use('/auth', require('./routes/auth'));
app.use('/todo', require('./routes/todo'));

let server = app.listen(process.env.PORT || 8000, () => console.log(`Server is working at 8000`))

module.exports = server;