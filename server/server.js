"use strict";
const https = require("https");
const app = require("./app.js");
const { User } = require("../db_schema/models");

const PORT = 3000;

const server = https.createServer(app);

const test = async () => {
  try {
    const topPlayers = await User.findAll({
      attributes: ["userId", "nickName", "score", "createdAt"],
      order: [["score", "DESC"]],
      limit: 10,
      offset: 0,
    });
    console.log(topPlayers);
  } catch (error) {
    console.log("ERROR >>>>")
    console.log(error);
  }
};

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
  test();
});
