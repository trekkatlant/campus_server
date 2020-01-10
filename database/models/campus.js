const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus-500x327.jpg"   
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = Campus;