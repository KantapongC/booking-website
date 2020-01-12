const express = require('express');
const router = express.Router();
const authenticate = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

// Load Employee Model
const Employee = require('../../models/Employee');

// @route   Post api/employees/create
// @desc    Adding a new employee
// @access  Private
router.post(
  '/create',
  [
    authenticate,
    check('username', 'Username is required')
      .not()
      .isEmpty()
  ],
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ status: 'Failed', errors: errors.array() });

    try {
      const newEmployee = new Employee(req.body);

      const addedEmployee = await newEmployee.save();

      return res.json({ status: 'Success', result: addedEmployee });
    } catch (error) {
      next(error);
    }
  }
);

// @route   GET api/employees/
// @desc    READ employees
// @access  Private
router.get('/', authenticate, async (req, res, next) => {
  const { page, limit } = req.query;

  try {
    const options = {
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 20
    };

    const employees = await Employee.aggregatePaginate(Employee.find(), options);

    return res.json({ status: 'Success', ...employees });
  } catch (error) {
    next(error);
  }
});

// @route   UPDATE api/employees/:id
// @desc    Update an employee
// @access  Private
router.put('/:id', authenticate, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Employee.updateOne({ _id: id }, req.body);

    return res.json({ status: 'Success', ...result });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE api/employees/:id
// @desc    Remove an employee
// @access  Private
router.delete('/:id', authenticate, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Employee.deleteOne({ _id: id });

    return res.json({ status: 'Success', ...result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
