const teamStore = require("../../store/team/team");

async function createTeam(teamData) {
  try {
    const createdTeam = await teamStore.createTeam(teamData);
    return createdTeam;
  } catch (error) {
    console.log(error);
  }
}

async function getAllTeam() {
  try {
    const allTeam = await teamStore.getAllTeam();
    return allTeam;
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
  createTeam,
  getAllTeam
  // getEmployeeById,
  // updateEmployee,
  // deleteEmployee
}