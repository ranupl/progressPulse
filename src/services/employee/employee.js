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

async function updateEmployee(employeeId, updatedEmployeeData) {
  try {
    const existingEmployee = await employeeStore.getEmployeeById(employeeId);
    if (!existingEmployee) {
      throw new Error("employee not found");
    }
    const updatedEmployee = await employeeStore.updateEmployee(employeeId, updatedEmployeeData);
    return updatedEmployee;
  } catch (err) {
    console.log(err);
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
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
}