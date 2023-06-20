"use strict";
const https = require("node:https");
const app = require("./app.js");

const PORT = 3000;

const server = https.createServer(app);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
