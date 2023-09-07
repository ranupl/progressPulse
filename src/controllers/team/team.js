const teamService = require("../../services/team/team");

async function createTeam(req, res) {
  try {
    const { id, title, description, release_notes } = req.body;
    const team = await teamService.createTeam({
      id,
      title,
      description,
      release_notes
    });
    res.json(team);
  } catch (error) {
    console.error("Error creating team:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the team" });
  }
}

async function getAllEmployee(req, res) {
  try {
    const employee = await employeeService.getAllEmployee();
    res.json(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ error: "An error occurred while fetching employee" });
  }
}

async function getEmployeeById(req, res) {
  const employeeId = req.params.id;

  try {
    const employee = await employeeService.getEmployeeById(employeeId);
    if (!employee) {
      res.status(404).json({ error: "Employee not found" });
    } else {
      res.json(employee);
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateEmployee(req, res) {
  const employeeId = req.params.id;
  const updateEmployeeData = req.body;

  try {
    const updatedEmployee = await employeeService.updateEmployee(employeeId, updateEmployeeData);
    res.json(updatedEmployee);
  } catch (err) {
    console.log(err);
  }
}

async function deleteEmployee(req, res) {
  const employeeId = req.params.id;

  try {
    const deletedEmployee = await employeeService.deleteEmployee(employeeId);
    res.json(deletedEmployee);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createTeam
  // getAllEmployee,
  // getEmployeeById,
  // updateEmployee,
  // deleteEmployee
}