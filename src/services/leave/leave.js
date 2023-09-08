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

async function getEmployeeById(employeeId) {
  try {
    const employee = await employeeStore.getEmployeeById(employeeId);
    return employee;
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
    createLeave,
    getAllLeave
//   getEmployeeById,
//   updateEmployee,
//   deleteEmployee
}