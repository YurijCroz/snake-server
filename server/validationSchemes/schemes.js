"use strict";
const yup = require("yup");

module.exports.registrationScore = yup.object().shape({
  nickName: yup.string().required().min(3).max(16),
  score: yup.number().required().min(0)
});
