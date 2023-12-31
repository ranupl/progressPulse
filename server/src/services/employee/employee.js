const employeeStore = require("../../store/employee/employee");

async function createEmployee(employeeData) {
  try {
    const createdEmployee = await employeeStore.createEmployee(employeeData);
    return createdEmployee;
  } catch (error) {
    console.log(error);
  }
}

async function getAllEmployee() {
  try {
    const allEmployee = await employeeStore.getAllEmployee();
    return allEmployee;
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

async function verifyEmail(email) {
  try {
    const existingEmployee = await employeeStore.getEmployeeByEmail(email);
    if(!existingEmployee) {
      throw new Error("Employee not found");
    }
    return existingEmployee;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  verifyEmail
}