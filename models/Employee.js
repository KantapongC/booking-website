const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

// Create Schema
const EmployeeSchema = new Schema({
	username: { type: String, required: true, unique: true },
	firstname: { type: String },
	lastname: { type: String },
	dob: { type: String },
	address: { type: String },
	position: { type: String },
	createdAt: {
		type: Date,
		default: Date.now
	}
});

EmployeeSchema.plugin(aggregatePaginate);

module.exports = employee = mongoose.model('employees', EmployeeSchema);
