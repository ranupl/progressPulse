const employeeService = require("../../services/employee/employee");

async function createEmployee(req, res) {
  try {
    const {id,first_name, middle_name, last_name, email, username, password } = req.body;
    
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
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
}

module.exports = {
  createEmployee,
  getAllEmployee
}