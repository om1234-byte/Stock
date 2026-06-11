const mongoose = require("mongoose");

const { PositionSchema } = require("../schemas/PositionSchema.js")

const PositionModel = mongoose.model("position",PositionSchema);

module.exports = {PositionModel};