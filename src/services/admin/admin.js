const adminStore = require("../../store/admin/admin");

async function getAdminById(adminId) {
    try {
        const admin = await adminStore.getAdminById(adminId);
        return admin;
    } catch (error) {
        console.log(error);
    }
}

async function updateAdmin(adminId, updatedAdminData) {
    try {
        const existingAdmin = await adminStore.getAdminById(adminId);
        if (!existingAdmin) {
            throw new Error("Admin not found");
        }
        const updatedAdmin = await adminStore.updateAdmin(adminId, updatedAdminData);
        return updatedAdmin;
    } catch (error) {
        console.log(error);
    }
}

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
    getAdminById,
    updateAdmin
}