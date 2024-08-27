const  express  = require('express');
const { authRoutes } = require('./auth');
const { productRoutes } = require('./product');

router = express.Router();

// router.post('/login', login);
router.use('/auth', authRoutes);
router.use('/product', productRoutes);
// const router = express.Router();

// const authRoutes = require('./auth');


// const routes = express.Router();

// routes.use('/auth', authRoutes);

module.exports = { router };