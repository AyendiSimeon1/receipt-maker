const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

export const signup = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        const newUser = await User.create({
            username: username,
            email: email,
            password: password,
            role: role 
        });

        const token = signToken(newUser._id);

        res.status(201).json({
            status: 'succes',
            token,
            data: {
                user: newUser
            }
        });
    } catch(error) {
        res.status.(400).json({
            status: 'fail',
            message: error.message
        });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password'})
        }
        const user = await User.findOne({ email }).select('+password');

        if(!user || !(await user.correctPassword(password))) {
            return res.status(401).json({ message: 'Incorrect email or password'});
        }

        const token = signToken(user._id);
        res.status(200).json({
            status: 'success',
            token
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};