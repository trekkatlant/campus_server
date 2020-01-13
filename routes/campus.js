const express = require("express");
const bodyParser = require("body-parser");
const campus = express.Router();
const db = require("../database/db");
const { Campuses, Students } = require("../database/models");

campus.use(bodyParser.json());

//gets all campuses
campus.get("/", async(req, res) => {
    try {
        let data = await Campuses.findAll();
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send("No campuses")
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
//gets a campus with id
campus.get("/:id", async(req, res) => {
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
//get all students from campus with id
campus.get("/:id/students", async(req, res) => {
    try {
        let data = await Campuses.findOne({ where: {id: req.params.id}, include: [{Students}]})
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send("Campus has no students");
        }
    } catch(err) {
        res.status(400).send(err);
    }
})
//create new campus
campus.post("/", async(req, res) => {
    try {
        await Campuses.create({
            name: req.body.name,
            address: req.body.address,
            description : req.body.description
        })
        res.status(201).send("New campus added successfully");

    } catch(err) {
        res.status(400).send(err);
    }
});
//update campus with id
campus.put("/:id", async(req, res) => {
    try {

    } catch(err) {
        res.status(400).send(err);
    }
});
//delete campus with id
campus.delete("/:id", async(req, res) => {
    try {

    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = campus;