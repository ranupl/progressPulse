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

async function getUserById(userId) {
  try {
    const user = await userStore.getUserById(userId);
    return user;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createEmployee,
  getAllEmployee
}