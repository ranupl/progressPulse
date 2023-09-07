const employeeService = require("../../services/employee/employee");

async function createEmployee(req, res) {
  try {
    const { id, first_name, middle_name, last_name, email, username, password } = req.body;
    const employee = await employeeService.createEmployee({
      id,
      first_name,
      middle_name,
      last_name,
      email,
      username,
      password,
    });
    res.json(employee);
  } catch (error) {
    console.error("Error creating employee:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the employee" });
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
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
}