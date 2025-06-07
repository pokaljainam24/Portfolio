const { Router } = require("express");
const pfController = require("../controllers/portfolioController");

const portfolioRouter = Router();

portfolioRouter.get('/', pfController.Openportfolio);

module.exports = portfolioRouter;