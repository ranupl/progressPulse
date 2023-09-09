const leaveApplyService = require("../../services/leaveApply/leaveApply");

// Function to start a transaction
async function startTransaction() {
  const connection = await pool.getConnection();
  await connection.beginTransaction();
  return connection;
}

// Function to commit a transaction
async function commitTransaction(connection) {
  await connection.commit();
  connection.release();
}

// Function to rollback a transaction
async function rollbackTransaction(connection) {
  await connection.rollback();
  connection.release();
}


async function createLeaveApply(req, res) {

  try {
    const { id, employee_id, no_of_days, type, reason, start_date, end_date } = req.body;
    const leaveApply = await leaveApplyService.createLeaveApply({
      id,
      employee_id,
      no_of_days,
      type,
      reason, 
      start_date,
      end_date
    });
    res.json(leaveApply);
  } catch (error) {
    console.error("Error creating on leaveApply:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating leaveApply" });
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

module.exports = {
  createLeaveApply
  // getEmployeeById
}