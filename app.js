const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const employeeController = require("./src/controllers/employee/employee");
const adminController = require("./src/controllers/admin/admin");
const teamController = require("./src/controllers/team/team");
const app = express();
require("./src/store/db");

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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


app.get("/", (req, res) => {
    res.send("progress pulse");
})

app.listen(PORT, () => {
    console.log(`server is running at :- http://localhost:${PORT}`);
})

