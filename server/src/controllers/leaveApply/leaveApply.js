const leaveApplyService = require("../../services/leaveApply/leaveApply");

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

async function getAllLeaveApply(req, res) {
  try {
    const leaveApply = await leaveApplyService.getAllLeaveApply();
    res.json(leaveApply);
  } catch (error) {
    console.error("Error fetching leaves:", error);
    res.status(500).json({ error: "An error occurred while fetching leaves" });
  }
}

async function getAllLeaveById(req, res) {
  const leaveId = req.params.id;

  try {
    const allLeave = await leaveApplyService.getAllLeaveById(leaveId);
    if (!allLeave) {
      res.status(404).json({ error: "No Leaves" });
    } else {
      res.json(allLeave);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createLeaveApply,
  getAllLeaveApply,
  getAllLeaveById
}