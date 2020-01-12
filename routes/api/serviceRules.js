const express = require('express');
const router = express.Router();
const authenticate = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

// Load User Model
const ServiceRule = require('../../models/ServiceRule');

// @route   Post api/servicerules/create
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

    try {
      const newService = new ServiceRule(req.body);

      const addedService = await newService.save();

      return res.json({ status: 'Success', result: addedService });
    } catch (error) {
      next(error);
    }
  }
);

// @route   GET api/servicerules/
// @desc    READ servicerules
// @access  Private
router.get('/', authenticate, async (req, res, next) => {
  try {
    const servicerules = await ServiceRule.find();

    return res.json({ status: 'Success', result: servicerules });
  } catch (error) {
    next(error);
  }
});

// @route   UPDATE api/servicerules/:id
// @desc    Update a service
// @access  Private
router.put('/:id', authenticate, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await ServiceRule.updateOne({ _id: id }, req.body);

    return res.json({ status: 'Success', ...result });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE api/servicerules/:id
// @desc    Delete a service
// @access  Private
router.delete('/:id', authenticate, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await ServiceRule.deleteOne({ _id: id });

    return res.json({ status: 'Success', ...result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
