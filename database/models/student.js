const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
    firstName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl : {
        type: Sequelize.STRING,
        allowNull: false
    },
    gpa: {
        type: Sequelize.DECIMAL(10,1),
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = Student;