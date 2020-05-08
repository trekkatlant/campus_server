const express = require("express");
const apiRouter = require("./routes/index");
const app = express();
const cors = require("cors");
const db = require("./database");
const seedDatabase = require("./seed/index")
let PORT = process.env.PORT || 4000;

db.sync({force:true})
.then(async () => {
    seedDatabase();
    app.use(cors());
    app.use("/api", apiRouter);
    app.listen(PORT, () => {
        console.log("Server is listening on port" + PORT);
    });
});


