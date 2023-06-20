"use strict";
const schemes = require("../validationSchemes/schemes");
const BadRequestError = require("../errors/BadRequestError");

module.exports.validateRegistrationScore = async (req, res, next) => {
  const validationResult = await schemes.registrationScore.isValid(req.body);
  if (!validationResult) {
    return next(new BadRequestError("Invalid data for registration"));
  } else {
    next();
  }
};
