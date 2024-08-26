const jwt = require('jsonwebtoken');
const User = require('../models/User')

exports.protect = async (req, res, next) => {
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startswith('Bearer ')) {
            token = req.header.authorization.split(' ')[1]
        }
        
        if(!token) {
            return res.status(401).json({ message: ' You are not logged in. Please log in'});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const currentUser = await User.findById(decoded.id);

        if(!currentUser) {
            return res.status(401).json({ message: ' The use belonging to this token does not exist'});
        }
        req.user = currentUser;
        next()

    } catch (error) {
        res.status(401).json({ message: 'Invalid token. Please log in again'});
    }
}


exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'You do not have permission to this route'});
        };
        next();
    };
};