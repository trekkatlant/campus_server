const express = require("express");
const bodyParser = require("body-parser");
const student = express.Router();
const Students = require("../database/models/student");

student.use(bodyParser.json());

//get all students
student.get("/", async(req, res) => {
    try {
        let data = await Students.findAll();
        if(data) {
            res.status(200).send(data);
        } else {
            res.status(400).send("No students");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
//get student with id
student.get("/:id", async(req, res, next) => {
    try {
        let data = await Students.findOne({ where: { id: req.params.id }});
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send("Student not found");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
//create new student
student.post("/", async(req, res, next) => {
    try {
        await Students.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email : req.body.email,
            gpa: req.body.gpa
        })
        res.status(201).send("New student added successfully");
    } catch(err) {
        res.status(400).send(err);
    }
});
//delete student with id
student.delete("/:id", async(req, res, next) => {
    try {
        let data = await Students.findOne({ where: { id: req.params.id }});
    } catch(err) {
        res.status(400).send(err);
    }
})

module.exports = student;