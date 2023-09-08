const leaveService = require("../../services/leave/leave");

async function createLeave(req, res) {
  try {
    const { id, employee_id, sick, casual, total } = req.body;
    const leave = await leaveService.createLeave({
      id,
      employee_id,
      sick,
      casual,
      total
    });
    res.json(leave);
  } catch (error) {
    console.error("Error creating leave:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the leave" });
  }
}

async function getAllLeave(req, res) {
  try {
    const leaves = await leaveService.getAllLeave();
    res.json(leaves);
  } catch (error) {
    console.error("Error fetching leaves:", error);
    res.status(500).json({ error: "An error occurred while fetching leaves" });
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
    createLeave,
    getAllLeave
//   getEmployeeById,
//   updateEmployee,
//   deleteEmployee
}