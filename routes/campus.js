const express = require("express");
const bodyParser = require("body-parser");
const app = express.Router();
const Campus = require("../database/models/campus");

app.use(bodyParser.json());


module.exports = app;