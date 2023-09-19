const adminService = require("../../services/admin/admin");
const errorCodes = require("../../models/error");

async function getAdminById(req, res) {
  const adminId = req.params.id;

  try {
    const admin = await adminService.getAdminById(adminId);
    if (!admin) {
      // res.status(404).json({ error: "Admin not found" });
      const error = new Error(errorCodes.ADMIN_ERROR.http_error.message);
      error.file = 'admin.js'; 
      error.function = 'getAdminById'; 
      throw error;
    } else {
      res.json(admin);
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateAdmin(req, res) {
  const adminId = req.params.id;
  const updateAdminData = req.body;

  try {
    const updatedAdmin = await adminService.updateAdmin(adminId, updateAdminData);
    res.json(updatedAdmin);
  } catch (err) {
    console.log(err);
  }
}

async function deleteAdmin(req, res) {
  const adminId = req.params.id;

  try {
    const deletedAdmin = await adminService.deleteAdmin(adminId);
    res.json(deletedAdmin);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAdminById,
  updateAdmin,
  deleteAdmin
}