const adminStore = require("../../store/admin/admin");

async function getAdminById(adminId) {
    try {
      const admin = await adminStore.getAdminById(adminId);
      return admin;
    } catch (error) {
      console.log(error);
    }
  }
  
//   async function updateEmployee(employeeId, updatedEmployeeData) {
//     try {
//       const existingEmployee = await employeeStore.getEmployeeById(employeeId);
//       if (!existingEmployee) {
//         throw new Error("employee not found");
//       }
//       const updatedEmployee = await employeeStore.updateEmployee(employeeId, updatedEmployeeData);
//       return updatedEmployee;
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   async function deleteEmployee(employeeId) {
//     try {
//       const existingEmployee = await employeeStore.getEmployeeById(employeeId);
//       if (!existingEmployee) {
//         throw new Error("Employee not found");
//       }
//       const deletedEmployee = await employeeStore.deleteEmployee(employeeId);
//       return deletedEmployee;
//     } catch (error) {
//       console.log(error);
//     }
//   }

  module.exports = {
    getAdminById
  }