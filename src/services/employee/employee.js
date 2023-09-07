const employeeStore = require("../../store/employee/employee");

async function createEmployee(employeeData) {
  try {
    const createdEmployee = await employeeStore.createEmployee(employeeData);
    return createdEmployee;
  } catch (error) {
    throw error;
  }
}

async function getAllEmployee() {
  try {
    const allEmployee = await employeeStore.getAllEmployee();
    return allEmployee;
  } catch (error) {
    throw error;
  }
}

async function getEmployeeById(employeeId) {
  try {
    const employee = await employeeStore.getEmployeeById(employeeId);
    return employee;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createEmployee,
  getAllEmployee,
  getEmployeeById
}