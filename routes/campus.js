const express = require("express");
const bodyParser = require("body-parser");
const campus = express.Router();
const Campuses = require("../database/models/campus");

campus.use(bodyParser.json());

campus.get("/:id", async(req, res, next) => {
    try {
        let data = await Campuses.findOne({ where: { id: req.params.id }});
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send("Campus not found");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = campus;