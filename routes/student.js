const express = require("express");
const bodyParser = require("body-parser");
const student = express.Router();
const { Campus, Student } = require("../database/models");
student.use(bodyParser.json());

//get all students
student.get("/", async(req, res) => {
    console.log("regbmg")
    try {
        let data = await Student.findAll({attributes: {exclude: ["campusId"]}});
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send("No students");
        }
    } catch(err) {
        res.status(400).json(err);
    }
});
//get student with id
student.get("/:id", async(req, res) => {
    try {
        let data = await Student.findOne({ where: { id: req.params.id }, attributes: {exclude: ["campusId"]}});
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send("Student not found");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
//get campus with student's id
student.get("/:id/campus", async(req, res) => {
    try {
        let data = await Student.findOne({ where: { id: req.params.id }, include: [{ Campus }]});
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send("Student isn't in a campus");
        }
    } catch(err) {
        res.status(400).send(err);
    }
})
//create new student
student.post("/", async(req, res) => {
    try {
        let data = await Student.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email : req.body.email,
            imageUrl : req.body.imageUrl,
            gpa: req.body.gpa
        })
        if(data) {
            res.status(201).send("New student added successfully");
        } else {
            res.status(400).send("Student not added")
        }
        
    } catch(err) {
        res.status(400).send(err);
    }
});
//uodate student with id
// student.put("/:id", async(req, res) => {
//     try {

//     } catch(err) {
//         res.status(400).send(err);
//     }
// })
//delete student with id
student.delete("/:id", async(req, res) => {
    try {
        let data = await Student.destroy({ where: { id: req.params.id }});
        if(data) {
            res.status(200).send("Delete successful");
        } else {
            res.status(400).send("Delete unsuccessful");
        }   
    } catch(err) {
        res.status(400).send(err);
    }
})

module.exports = student;