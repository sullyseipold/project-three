const router = require("express").Router();
const usersRoutes = require("./users");
const activityRoutes = require("./activity");
const hourtypeRoutes = require("./hourtype");
const indexRoutes = require("./index");
const timesheetRoutes = require("./activity");


// user routes
router.use("/users", usersRoutes);


module.exports = router;
