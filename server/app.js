const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const employeeController = require("./src/controllers/employee/employee");
const adminController = require("./src/controllers/admin/admin");
const teamController = require("./src/controllers/team/team");
const progressController = require("./src/controllers/progress/progress");
const leaveController = require("./src/controllers/leave/leave");
const leaveApplyController = require("./src/controllers/leaveApply/leaveApply");
const authController = require("./src/controllers/auth/auth");
const mappingController = require("./src/controllers/mappings/teamMapping");
const authenticateToken = require('./src/middleware/authToken');
const cors = require('cors');
const app = express();
require("./src/store/db");
const session = require('express-session');

app.use(session({
  secret: 'progressPulse',
  resave: false,
  saveUninitialized: true
}));

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(authenticateToken);

// auth
app.post("/login", authController.userLogin);
app.post("/adminLogin", authController.adminLogin);

// admin
app.get("/getAdminById/:id", adminController.getAdminById);
app.put("/updateAdmin/:id", adminController.updateAdmin);
app.delete("/deleteAdmin/:id", adminController.deleteAdmin);

// employee
app.post("/createEmployee", employeeController.createEmployee);
app.get("/getAllEmployee", employeeController.getAllEmployee);
app.get("/getEmployeeById/:id", employeeController.getEmployeeById);
app.put("/updateEmployee/:id", employeeController.updateEmployee);
app.delete("/deleteEmployee/:id", employeeController.deleteEmployee);

// team
app.post("/createTeam", teamController.createTeam);
app.get("/getAllTeam", teamController.getAllTeam);
app.get("/getTeamById/:id", teamController.getTeamById);
app.put("/updateTeam/:id", teamController.updateTeam);
app.delete("/deleteTeam/:id", teamController.deleteTeam);

// progress
app.post("/createProgress", progressController.createProgress);
app.get("/getAllProgress", progressController.getAllProgress);
app.get("/getProgressById/:id", progressController.getProgressById);
app.put("/updateProgress/:id", progressController.updateProgress);
app.delete("/deleteProgress/:id", progressController.deleteProgress);

// leave
app.post("/createLeave", leaveController.createLeave);
app.get("/getAllLeave", leaveController.getAllLeave);
app.get("/getLeaveById/:id", leaveController.getLeaveById);
app.put("/updateLeave/:id", leaveController.updateLeave);
app.delete("/deleteLeave/:id", leaveController.deleteLeave);

// leave Apply
app.post("/createLeaveApply", leaveApplyController.createLeaveApply);
app.get("/getAllLeaveApply", leaveApplyController.getAllLeaveApply);
app.get("/getLeaveApplyById/:id", leaveApplyController.getLeaveApplyById);
app.put("/updateLeaveApply/:id", leaveApplyController.updateLeaveApply);

// teamEmployee map
app.post("/teamEmployeeMap", mappingController.teamEmployeeMap);
app.get("/getTeamEmployeeMapById/:id", mappingController.getTeamEmployeeMapById);
app.delete("/deleteTeamEmployeeMap/:id", mappingController.deleteTeamEmployeeMap);

app.get("/", (req, res) => {
    res.send("progress pulse");
})

app.listen(PORT, () => {
    console.log(`server is running at :- http://localhost:${PORT}`);
})

