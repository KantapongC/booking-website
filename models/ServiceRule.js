const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

// Create Schema
const ServiceRuleSchema = new Schema({
  serviceName: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  customer: { type: Number },
  blowDry: { type: Number },
  coat: { type: Number },
  cut: { type: Number },
  hairSpa: { type: Number },
  massage: { type: Number },
  nail: { type: Number },
  product: { type: Number },
  steam: { type: Number },
  thin: { type: Number },
  tint: { type: Number },
  wash: { type: Number },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ServiceRuleSchema.plugin(aggregatePaginate);

module.exports = serviceRule = mongoose.model('serviceRules', ServiceRuleSchema);
