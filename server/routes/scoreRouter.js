"use strict";
const { Router } = require("express");
const { getTopPlayers, gameOver } = require("../controllers/scoreController");
const { validateRegistrationScore } = require("../middleware/validators");

const scoreRouter = Router();

scoreRouter.get("/getTopPlayers", getTopPlayers);

scoreRouter.post("/gameOver", validateRegistrationScore, gameOver);

module.exports = scoreRouter;
