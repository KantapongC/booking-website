const express = require('express');
const router = express.Router();
const authenticate = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

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
		const errors = validationResult(req);

		if (!errors.isEmpty()) return res.status(400).json({ status: 'Failed', errors: errors.array() });

		const { serviceName, price } = req.body;

		try {
			const newService = new Service({
				serviceName,
				price
			});

			const addedService = await newService.save();

			return res.json({ status: 'Success', result: addedService });
		} catch (error) {
			next(error);
		}
	}
);

// @route   GET api/services/
// @desc    READ services
// @access  Private
router.get('/', authenticate, async (req, res, next) => {
	const { startDate, endDate } = req.body;

	try {
		return res.json({ status: 'Success', result: req.body });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
