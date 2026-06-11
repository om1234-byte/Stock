const mongoose = require("mongoose");
const {HoldingSchema} = require('../schemas/HoldingSchema.js');

const HoldingModel =  mongoose.model('holding',HoldingSchema);

module.exports = { HoldingModel};