const express = require('express');
// const router = express.Router();
// const ctlr = require('../controllers/auth');
const { login, signup } =  require('../controllers/auth');
const authRoutes = express.Router();

authRoutes.post('/login', login);
authRoutes.post('/signup', signup);


module.exports = { authRoutes };
