const adminService =  require("../../services/admin/admin");

async function getAdminById(req, res) {
    const adminId = req.params.id;
  
    try {
      const admin = await adminService.getAdminById(adminId);
      if (!admin) {
        res.status(404).json({ error: "Admin not found" });
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
  
//   async function deleteEmployee(req, res) {
//     const employeeId = req.params.id;
  
//     try {
//       const deletedEmployee = await employeeService.deleteEmployee(employeeId);
//       res.json(deletedEmployee);
//     } catch (err) {
//       console.log(err);
//     }
//   }

  module.exports = {
    getAdminById,
    updateAdmin
  }