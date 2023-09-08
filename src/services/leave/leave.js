const leaveStore = require("../../store/leave/leave");

async function createLeave(leaveData) {
  try {
    const createdLeave = await leaveStore.createLeave(leaveData);
    return createdLeave;
  } catch (error) {
    console.log(error);
  }
}

async function getAllLeave() {
  try {
    const allLeave = await leaveStore.getAllLeave();
    return allLeave;
  } catch (error) {
    console.log(error);
  }
}

async function getLeaveById(leaveId) {
  try {
    const leave = await leaveStore.getLeaveById(leaveId);
    return leave;
  } catch (error) {
    console.log(error);
  }
}

async function updateLeave(leaveId, updatedLeaveData) {
  try {
    const existingLeave = await leaveStore.getLeaveById(leaveId);
    if (!existingLeave) {
      throw new Error("No leaves");
    }
    const updatedLeave = await leaveStore.updateLeave(leaveId, updatedLeaveData);
    return updatedLeave;
  } catch (error) {
    console.log(error);
  }
}

async function deleteLeave(leaveId) {
  try {
    const existingLeave = await leaveStore.getLeaveById(leaveId);
    if (!existingLeave) {
      throw new Error("No leaves");
    }
    const deletedLeave = await leaveStore.deleteLeave(leaveId);
    return deletedLeave;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    createLeave,
    getAllLeave,
    getLeaveById,
    updateLeave,
    deleteLeave
}