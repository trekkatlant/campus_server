const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define('student', {
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
        allowNull: false,
        defaultValue: "https://www.trustedclothes.com/blog/wp-content/uploads/2019/02/anonymous-person-221117.jpg"
    },
    gpa: {
        type: Sequelize.DECIMAL(10,1)
    }
},{
    timestamps: false
});

module.exports = Student;