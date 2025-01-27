const mongoose = require("mongoose");

const marketUpdateSchema = mongoose.Schema({
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MarketUpdate", marketUpdateSchema);
