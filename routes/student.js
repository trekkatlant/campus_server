const express = require("express");
const bodyParser = require("body-parser");
const app = express.Router();
const Student = require("../database/models/student");

app.use(bodyParser.json());


module.exports = app;