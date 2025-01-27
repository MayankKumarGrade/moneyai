const mongoose = require("mongoose");

const strategySchema = mongoose.Schema({
  name: { type: String, required: true },
  roi: { type: Number, required: true },
  cagr: { type: Number, required: true },
  drawdown: { type: Number, required: true },
  performanceData: [
    {
      date: { type: Date, required: true },
      value: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Strategy", strategySchema);
