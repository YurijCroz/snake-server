"use strict";
const { User } = require("../db_schema/models");

module.exports.getTopPlayers = async (req, res, next) => {
  try {
    const topPlayers = await User.findAll({
      attributes: ["userId", "nickName", "score", "createdAt"],
      order: [["score", "DESC"]],
      limit: 10,
      offset: 0,
    });
    res.send(topPlayers);
  } catch (error) {
    next(error);
  }
};

module.exports.gameOver = async (req, res, next) => {
  try {
    const { nickName, score } = req.body;
    const result = await User.create(
      {
        nickName,
        score,
      },
      {
        returning: true,
      }
    );
    res.send(result);
  } catch (error) {
    next(error);
  }
};
