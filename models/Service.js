const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

// Create Schema
const ServiceSchema = new Schema({
	serviceName: { type: String, required: true },
	price: { type: Number, required: true },
	customer: { type: String },
	blowDry: { type: String },
	coat: { type: String },
	cut: { type: String },
	hairSpa: { type: String },
	massage: { type: String },
	nail: { type: String },
	product: { type: String },
	steam: { type: String },
	thin: { type: String },
	tint: { type: String },
	wash: { type: String },
	createdAt: {
		type: Date,
		default: Date.now
	}
});

ServiceSchema.plugin(aggregatePaginate);

module.exports = service = mongoose.model('services', ServiceSchema);
