const Portfolio = require("../models/Portfolio");
const Strategy = require("../models/Strategy");
const MarketUpdate = require("../models/MarketUpdate");

const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find({});
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStrategies = async (req, res) => {
  try {
    const strategies = await Strategy.find({});
    res.status(200).json(strategies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMarketUpdates = async (req, res) => {
  try {
    const updates = await MarketUpdate.find({});
    res.status(200).json(updates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPortfolio, getStrategies, getMarketUpdates };
