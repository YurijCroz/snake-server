"use strict";
const https = require("https");
const app = require("./app.js");
const fs = require("fs");

const options = {
  key: fs.readFileSync("../key.pem"),
  cert: fs.readFileSync("../cert.pem"),
};

const PORT = 3000;

const server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
