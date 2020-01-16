const express = require("express");
const bodyParser = require("body-parser");
const student = express.Router();
const { Campus, Student } = require("../database/models");
student.use(bodyParser.json());
const db = require("../database/db");

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
        res.status(400).send(err);
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
// student.get("/:id/campus", async(req, res) => {
//     try {
//         let data = await Student.findOne({ where: { id: req.params.id }, include: [{ Campus }]});
//         if(data) {
//             res.status(200).json(data);
//         } else {
//             res.status(400).send("Student isn't in a campus");
//         }
//     } catch(err) {
//         res.status(400).send(err);
//     }
// });
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
        // await data.setCampus(req.body.campus);
        if(data) {
            res.status(201).send("New student added successfully");
        } else {
            res.status(400).send("Student not added")
        }
        
    } catch(err) {
        res.status(400).send(err);
    }
});
//update student with id
student.put("/:id", async(req, res) => {
    try {
        let data = await Student.update({
            firstName: req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            imageUrl : req.body.imageUrl,
            gpa : req.body.gpa
        },
        { where: {id: req.params.id}})
        if(data) {
            res.status(200).send(data[1]);
        } else {
            res.status(400).send("Update unsuccessful");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
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
});

module.exports = student;