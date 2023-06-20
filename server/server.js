"use strict";
const https = require("https");
const app = require("./app.js");
const fs = require("fs");
const path = require("path");

const keyPem = path.resolve(__dirname, "../key.pem");
const certPem = path.resolve(__dirname, "../cert.pem");

const options = {
  key: fs.readFileSync(keyPem),
  cert: fs.readFileSync(certPem),
};

const PORT = 3000;

const server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
