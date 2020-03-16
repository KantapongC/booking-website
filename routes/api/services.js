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

    try {
      const newService = new Service(req.body);

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
  const { startDate, endDate, page, limit } = req.query;

  try {
    const options = {
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 20
    };

    const pipeline = [{ $match: { $and: [{ createdAt: { $gte: new Date(startDate) } }, { createdAt: { $lte: new Date(endDate) } }] } }];

    const services = await Service.aggregatePaginate(Service.aggregate(pipeline), options);

    return res.json({ status: 'Success', ...services });
  } catch (error) {
    next(error);
  }
});

// @route   UPDATE api/services/:id
// @desc    Update a service
// @access  Private
router.put('/:id', authenticate, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Service.updateOne({ _id: id }, req.body);

    return res.json({ status: 'Success', ...result });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE api/services/:id
// @desc    Delete a service
// @access  Private
router.delete('/:id', authenticate, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Service.deleteOne({ _id: id });

    return res.json({ status: 'Success', ...result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
