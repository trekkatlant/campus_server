const express = require("express");
const students = require("./routes/student");
const campuses = require("./routes/campus");
const app = express();
const cors = require("cors");
const db = require("./database");
app.use(cors());
app.use("/students", students);
app.use("/campuses", campuses);
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send("Default API route, nothing to see here");
});
app.listen(port, () => {
    console.log("Server is listening on localhost:" + {port});
});

