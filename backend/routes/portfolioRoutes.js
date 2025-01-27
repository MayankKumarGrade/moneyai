const express = require("express");
const {
  getPortfolio,
  getStrategies,
  getMarketUpdates,
} = require("../controllers/portfolioController");

const router = express.Router();

router.get("/portfolio", getPortfolio);
router.get("/strategies", getStrategies);
router.get("/market-updates", getMarketUpdates);

module.exports = router;
