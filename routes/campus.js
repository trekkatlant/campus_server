const bodyParser = require("body-parser");
const campus = require("express").Router();
const db = require("../database/db");
const { Campus, Student } = require("../database/models");
campus.use(bodyParser.json());

//gets all campuses
campus.get('/', async(req, res) => {
    console.log("fwrffw")
    try {
        let data = await Campus.findAll();
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send(err)
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
//gets a campus with id
campus.get("/:id", async(req, res) => {
    try {
        let data = await Campus.findOne({ where: { id: req.params.id }});
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send("Campus not found");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
// get all students from campus with id
campus.get("/:id/students", async(req, res) => {
    try {
        let data = await Campus.findOne({ where: {id: req.params.id}, include: [{Student}]})
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send("Campus has no students");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
//create new campus
campus.post('/', async(req, res, next) => {
    //res.json({test: "asdasd"})
    console.log(req.body);
    try {
        // res.json({"dsada":"dasdafas"})
        let data = await Campus.create({
            name : req.body.name,
            imageUrl: req.body.imageUrl,
            address : req.body.address,
            description : req.body.description
        })
        if(data) {
            res.status(201).send("New campus added successfully");
        } else {
            res.status(400).send("not added");
        }

    } catch(err) {
        res.status(400).send(err);
    }
});
//update campus with id
campus.put("/:id", async(req, res) => {
    try {
        let data = await Campus.update({
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            address: req.body.address,
            description: req.body.description
        },
        { where: {id: req.params.id}})
        if(data) {
            res.status(200).send(data[1]);
        } else {
            res.status(400).send("Updata unsuccessful");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
//delete campus with id
campus.delete("/:id", async(req, res) => {
    try {
        let data = await Campus.destroy({ where: {id: req.params.id }});
        if(data) {
            res.status(200).send("Delete successful");
        } else {
            res.status(400).send("Delete unsuccessful");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = campus;