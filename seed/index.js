const Student = require("../database/models/student");
const Campus = require("../database/models/campus");
const students = require("./student");
const campuses = require("./campus");

populateCampusesTable = async (campuses) => {
    for(let i=0; i<campuses.length; i++) {
        let body = campuses[i];
        let data = await Campus.create({
            name: body.name,
            imageUrl: body.imageUrl,
            address: body.address,
            description: body.description
        })
    }
};
populateStudentsTable = async (students) => {
    for(let i=0; i<students.length; i++) {
        let body = students[i];
        let data = await Student.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email : body.email,
            imageUrl : body.imageUrl,
            gpa: body.gpa
        })
    }
};
seedDatabase = async () => {
    try {
        await populateCampusesTable(campuses);
        await populateStudentsTable(students);
        console.log("Database populated");
    } catch(err) {
        console.log(err);
    }
};

module.exports = index;