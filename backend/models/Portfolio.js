const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
  userId: { type: String, required: true },
  totalValue: { type: Number, required: true },
  dailyPnL: { type: Number, required: true },
  winRate: { type: Number, required: true },
  assetAllocation: { type: Object, required: true },
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
