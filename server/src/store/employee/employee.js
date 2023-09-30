const db = require("../db");
function generateRandomId(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    id += charset.charAt(randomIndex);
  }
  return id;
}

async function createEmployee(employeeData) {
  const randomId = generateRandomId(5);
  const { id, first_name, middle_name, last_name, email, username, password } = employeeData;
  const query =
    "INSERT INTO employee (id,first_name, middle_name, last_name, email, username, password) VALUES ( ?,?, ?, ?, ?, ?, ?)";

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        query,
        [randomId, first_name, middle_name, last_name, email, username, password],
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
    console.log(error);
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
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
}

async function deleteEmployee(employeeId) {
  const query = "DELETE FROM employee WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [employeeId], (err, results) => {
        if (err) reject(err);
        resolve(results.affectedRows > 0);
      });
    });
    return queryResult;
  } catch (error) {
    console.log(error);
  }
}

async function getEmployeeByEmail(email) {
  const query = "SELECT * FROM employee WHERE email = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [email], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      })
    })
    return queryResult;
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
  getEmployeeByEmail
};