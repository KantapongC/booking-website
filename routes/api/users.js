const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const auth = require('../../middleware/auth');
const config = require('config');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User Model
const User = require('../../models/User');

// @route   Post api/users/register
// @desc    Register
// @access  Public
router.post('/register', async (req, res, next) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	// Check Validation
	if (!isValid) return res.status(400).json({ status: 'Failed', message: { ...errors } });

	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });

		if (user) {
			errors.username = 'Username already exists';
			return res.status(400).json({ status: 'Failed', message: { ...errors } });
		}

		const salt = await bcrypt.genSalt(10);
		const hashed = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			password: hashed
		});

		const addedUser = await newUser.save();

		return res.json({ status: 'Success', result: addedUser });
	} catch (error) {
		next(error);
	}
});

// @route   Post api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', async (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	//Check Validation Input
	if (!isValid) return res.status(400).json({ status: 'Failed', message: { ...errors } });

	const { username, password } = req.body;

	try {
		// Find user by email
		const user = await User.findOne({ username });

		if (!user) {
			errors.username = 'User not found';
			return res.status(404).json({ status: 'Failed', message: { ...errors } });
		}

		// Check password
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			errors.password = 'Password incorrect';
			return res.status(400).json({ status: 'Failed', message: { ...errors } });
		}

		// User Matched
		const payload = { id: user.id, username: user.username }; // Create JWT Payload

		// Sign Token
		jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
			res.json({
				status: 'Success',
				token
			});
		});
	} catch (error) {
		next(error);
	}
});

// @route   Get api/users/current
// @desc    Return Current User
// @access  Private
router.get('/current', auth, async (req, res, next) => {
	// res.json({
	// 	id: req.user.id,
	// 	username: req.user.username
	// });
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
