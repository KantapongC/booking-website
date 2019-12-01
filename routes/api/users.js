const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator');

// Load User Model
const User = require('../../models/User');

// @route   Post api/users/register
// @desc    Register
// @access  Public
router.post(
	'/register',
	[
		check('username', 'Username is required')
			.not()
			.isEmpty(),
		check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
	],
	async (req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) return res.status(400).json({ status: 'Failed', errors: errors.array() });

		const { username, password } = req.body;

		try {
			const user = await User.findOne({ username });

			if (user) {
				errors.username = 'Username already exists';
				return res.status(400).json({ status: 'Failed', errors: [{ msg: 'Username already exists' }] });
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
	}
);

// @route   Post api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', [check('username', 'Username is required').not().isEmpty(), check('password', 'Password is required').not().isEmpty()], async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) return res.status(400).json({ status: 'Failed', errors: errors.array() });

	const { username, password } = req.body;

	try {
		// Find user by email
		const user = await User.findOne({ username });

		if (!user) return res.status(404).json({ status: 'Failed', message: [{ msg: 'User not found' }] });

		// Check password
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) return res.status(400).json({ status: 'Failed', message: [{ msg: 'Password incorrect' }] });

		// User Matched
		const payload = { id: user.id, username: user.username }; // Create JWT Payload

		// Sign Token
		jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (error, token) => {
			if (error) throw error;

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
router.get('/current', authenticate, async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
