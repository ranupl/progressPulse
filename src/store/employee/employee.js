const db = require("../db");


async function createEmployee(employeeData) {
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
  const {id,first_name, middle_name, last_name, email, username, password } = employeeData;
  const query =
    "INSERT INTO employee (id,first_name, middle_name, last_name, email, username, password, created, modified) VALUES ( ?,?, ?, ?, ?, ?, ?, ?, ?)";

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        query,
        [id,first_name, middle_name, last_name, email, username, password, formattedDate, formattedDate],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
    return results;
  } catch (error) {
    throw error;
  }
}

async function getAllEmployee() {
  const query = "SELECT * FROM employee";
  try {
    const queryResults = await new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    return queryResults;
  } catch (err) {
    console.log(err);
  }
}

async function getEmployeeById(employeeId) {
  const query = "SELECT * FROM employee WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [employeeId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    return queryResult;
  } catch (err) {
    console.log(err);
  }
}

async function updateEmployee(employeeId, updatedEmployeeData) {
  const query = "UPDATE employee SET ? WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [updatedEmployeeData, employeeId], (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results.affectedRows > 0);
      });
    });
    return queryResult;
  } catch (err) {
    console.log(err);
  }
}

// async function deleteUser(userId) {
//   const query = "DELETE FROM users WHERE id = ?";
//   try {
//     const queryResult = await new Promise((resolve, reject) => {
//       db.query(query, [userId], (err, results) => {
//         if (err) reject(err);
//         resolve(results.affectedRows > 0);
//       });
//     });
//     return queryResult;
//   } catch (err) {
//     console.log(err);
//   }
// }

module.exports = {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployee
  // getAllUsers,
  // getUserById,
  // updateUser,
  // deleteUser,
};