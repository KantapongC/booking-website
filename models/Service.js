const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ServiceSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = service = mongoose.model('services', ServiceSchema);
