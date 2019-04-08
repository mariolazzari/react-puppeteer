const express = require("express");

// read enviroment variables
require("dotenv").config();
const { EXPRESS_PORT } = process.env;

const app = express();

app.listen(EXPRESS_PORT, () =>
  console.log(`Express started on port ${EXPRESS_PORT}`)
);
