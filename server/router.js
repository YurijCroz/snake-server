"use strict";
const { Router } = require("express");

const router = Router();

const scoreRouter = require("./routes/scoreRouter.js");
router.use("/score", scoreRouter);

module.exports = router;
