require("dotenv").config();
const Sequelize = requir("sequelize");

const db = new Sequelize(process.env.DATABASE_URL,
{   
    dialectOptions: {
        ssl: true
    }
});
module.exports = db;