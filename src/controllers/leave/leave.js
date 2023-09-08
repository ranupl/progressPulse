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

async function getLeaveById(req, res) {
  const leaveId = req.params.id;

  try {
    const leave = await leaveService.getLeaveById(leaveId);
    if (!leave) {
      res.status(404).json({ error: "No Leaves" });
    } else {
      res.json(leave);
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateLeave(req, res) {
  const leaveId = req.params.id;
  const updateLeaveData = req.body;

  try {
    const updatedLeave = await leaveService.updateLeave(leaveId, updateLeaveData);
    res.json(updatedLeave);
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
    getAllLeave,
    getLeaveById,
    updateLeave
//   getEmployeeById,
//   updateEmployee,
//   deleteEmployee
}