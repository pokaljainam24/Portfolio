const { Router } = require("express");

const Mainrouter = Router();

const portfolioRouter = require("./portfolioRoutes");
Mainrouter.use('/',portfolioRouter);

module.exports = Mainrouter;