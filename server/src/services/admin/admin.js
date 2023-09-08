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

  async function deleteAdmin(adminId) {
    try {
      const existingAdmin = await adminStore.getAdminById(adminId);
      if (!existingAdmin) {
        throw new Error("Admin not found");
      }
      const deletedAdmin = await adminStore.deleteAdmin(adminId);
      return deletedAdmin;
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
    getAdminById,
    updateAdmin,
    deleteAdmin
}