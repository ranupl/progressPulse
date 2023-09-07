const db = require("../db");

async function getAdminById(adminId) {
    const query = "SELECT * FROM admin WHERE id = ?";
    try {
      const queryResult = await new Promise((resolve, reject) => {
        db.query(query, [adminId], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
      return queryResult;
    } catch (error) {
      console.log(error);
    }
  }
  
//   async function updateEmployee(employeeId, updatedEmployeeData) {
//     const query = "UPDATE employee SET ? WHERE id = ?";
//     try {
//       const queryResult = await new Promise((resolve, reject) => {
//         db.query(query, [updatedEmployeeData, employeeId], (err, results) => {
//           if (err) {
//             reject(err);
//           }
//           resolve(results.affectedRows > 0);
//         });
//       });
//       return queryResult;
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   async function deleteEmployee(employeeId) {
//     const query = "DELETE FROM employee WHERE id = ?";
//     try {
//       const queryResult = await new Promise((resolve, reject) => {
//         db.query(query, [employeeId], (err, results) => {
//           if (err) reject(err);
//           resolve(results.affectedRows > 0);
//         });
//       });
//       return queryResult;
//     } catch (error) {
//       console.log(error);
//     }
//   }

  module.exports = {
    getAdminById
  }