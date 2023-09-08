const db = require("../db");

async function createLeave(leaveData) {
  const { id, employee_id, sick, casual, total } = leaveData;
  const query =
    "INSERT INTO leaves (id, employee_id, sick, casual, total) VALUES ( ?, ?, ?, ?, ?)";

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        query,
        [id, employee_id, sick, casual, total],
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

async function getAllLeave() {
  const query = "SELECT * FROM leaves";
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

module.exports = {
    createLeave,
    getAllLeave
//   getEmployeeById, 
//   updateEmployee,
//   deleteEmployee
};