const router = require("express").Router();
const studentRoute = require("./student")
const campusRoute = require("./campus");

router.use("/students", studentRoute);
router.use("/campuses", campusRoute);

module.exports = router;