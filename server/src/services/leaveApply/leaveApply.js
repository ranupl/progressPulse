const leaveApplyStore = require("../../store/leaveApply/leaveApply");

async function createLeaveApply(leaveApplyData) {
  try {
    const createdLeaveApply = await leaveApplyStore.createLeaveApply(leaveApplyData);
    return createdLeaveApply;
  } catch (error) {
    console.log(error);
  }
}

async function getAllLeaveApply() {
  try {
    const allLeave = await leaveApplyStore.getAllLeaveApply();
    return allLeave;
  } catch (error) {
    console.log(error);
  }
}

async function getLeaveApplyById(leaveId) {
  try {
    const allLeave = await leaveApplyStore.getLeaveApplyById(leaveId);
    return allLeave;
  } catch (error) {
    console.log(error);
  }
}

async function updateLeaveApply(leaveId, updatedLeaveData) {
  try {
    const existingLeave = await leaveApplyStore.updateLeaveApply(leaveId);
    if (!existingLeave) {
      throw new Error("No leaves");
    }
    const updatedLeave = await leaveApplyStore.updateLeaveApply(leaveId, updatedLeaveData);
    return updatedLeave;
  } catch (error) {
    console.log(error);
  }
}

async function deleteEmployee(employeeId) {
  try {
    const existingEmployee = await employeeStore.getEmployeeById(employeeId);
    if (!existingEmployee) {
      throw new Error("Employee not found");
    }
    const deletedEmployee = await employeeStore.deleteEmployee(employeeId);
    return deletedEmployee;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createLeaveApply,
  getAllLeaveApply,
  getLeaveApplyById,
  updateLeaveApply
  
}