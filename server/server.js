"use strict";
const https = require("https");
// const fs = require("fs");
const app = require("./app.js");

const PORT = 3000;

// const options = {
//   key: fs.readFileSync("../private_key.pem"),
//   cert: fs.readFileSync("../certificate.pem"),
// };

const server = https.createServer(/* options, */ app);

server.listen(PORT, () =>
  console.log(`Example app listening on port >>> ${PORT}! <<<`)
);
