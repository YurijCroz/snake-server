"use strict";
const app = require("./app.js");

const PORT = 443;

const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;