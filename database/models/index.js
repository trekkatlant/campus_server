const Student = require("./student");
const Campus = require("./campus");

Student.belongTo(Campus);
Campus.hasMany(Student);

module.exports = { Student, Campus };