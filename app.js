const express = require("express");
const router = require("./routes/index");
// const students = require("./routes/student");
// const campuses = require("./routes/campus");
const app = express();
const cors = require("cors");
const db = require("./database");
const seedDatabase = require("./seed/index")
// app.use(`/students`, students);
// app.use(`/campuses`, campuses);
let PORT = process.env.PORT || 4000;
// app.get("/campuses", (req,res) => {
//     res.status(200).send("deos thsi work");
// })

// app.get("/", (req, res) => {
//     res.status(200).send("Default API route, nothing to see here");
// });

db.sync({force : true})
.then(async () => {
    seedDatabase();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use("/api", router);
    app.listen(PORT, () => {
        console.log("Server is listening on port" + PORT);
    });
});


