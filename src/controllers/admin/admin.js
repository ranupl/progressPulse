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
  
//   async function updateEmployee(req, res) {
//     const employeeId = req.params.id;
//     const updateEmployeeData = req.body;
  
//     try {
//       const updatedEmployee = await employeeService.updateEmployee(employeeId, updateEmployeeData);
//       res.json(updatedEmployee);
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
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
    getAdminById
  }