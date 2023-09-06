const employeeStore = require("../../store/employee/employee");

async function createEmployee(employeeData) {
  try {
    const createdEmployee = await employeeStore.createEmployee(employeeData);
    return createdEmployee;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createEmployee
}