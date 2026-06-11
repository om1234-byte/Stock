const mongoose = require("mongoose");

const {OrderSchema} = require('../schemas/OrderSchema.js');

const OrderModel = mongoose.model("order",OrderSchema);

module.exports = {OrderModel};