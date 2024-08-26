const express = require('express');
const router = express.Router();
const ctlr = require('../controllers/auth');

router.post('/login', ctlr.login);
router.post('/signup', ctlr.signup);


router.get('/protected', protect, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  });
  
  // Example of an admin-only route
  router.get('/admin', protect, restrictTo('admin'), (req, res) => {
    res.json({ message: 'This is an admin-only route' });
  });

module.exports = router;