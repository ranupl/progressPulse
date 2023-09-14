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

async function getAllLeaveById() {
  try {
    const allLeave = await leaveApplyStore.getAllLeaveById();
    return allLeave;
  } catch (error) {
    console.log(error);
  }
}



async function updateEmployee(employeeId, updatedEmployeeData) {
  try {
    const existingEmployee = await employeeStore.getEmployeeById(employeeId);
    if (!existingEmployee) {
      throw new Error("employee not found");
    }
    const updatedEmployee = await employeeStore.updateEmployee(employeeId, updatedEmployeeData);
    return updatedEmployee;
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
  getAllLeaveById
  
}