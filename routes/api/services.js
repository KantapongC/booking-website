const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../../middleware/auth');
const config = require('config');

// Load User Model
const Service = require('../../models/Service');

// @route   Post api/services/create
// @desc    Adding a new service of that day
// @access  Private
router.post(
	'/create',
	[
		authenticate,
		check('serviceName', 'ServiceName is required')
			.not()
			.isEmpty(),
		check('price', 'Price is required')
			.not()
			.isEmpty()
	],
	async (req, res, next) => {
		const { serviceName, price } = req.body;

		try {
			const newService = new Service({
				serviceName,
				price
			});

			const addedUser = await newService.save();

			return res.json({ status: 'Success', result: addedUser });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
