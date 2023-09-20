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

async function createLeaveApply(leaveApplyData) {
  const randomId = generateRandomId(5);
  const { id, employee_id, no_of_days, type, reason, start_date, end_date } = leaveApplyData;
  const status = type === '1' ? 'approved' : 'pending';
  console.log("type",type);
  console.log("status", status);
  const query =
    "INSERT INTO leave_apply (id, employee_id, no_of_days, type, reason,start_date, end_date, status) VALUES ( ?,?, ?, ?, ?, ?, ?, ?)";

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        query,
        [randomId, employee_id, no_of_days, type, reason, start_date, end_date, status],
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

async function getAllLeaveApply() {
  const query = "select e.username , la.id, la.type, la.status, la.start_date, la.end_date from leave_apply la join employee e on la.employee_id = e.id where la.status = 'pending'";
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

async function getLeaveApplyById(leaveId) {
  const query = " SELECT * FROM leave_apply where employee_id = ?";
  try {
    const queryResults = await new Promise((resolve, reject) => {
      db.query(query, [leaveId], (err, results) => {
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

async function updateLeaveApply(leaveId, updatedLeaveData) {
  const query = "UPDATE leave_apply SET ? WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [updatedLeaveData, leaveId], (err, results) => {
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
  createLeaveApply,
  getAllLeaveApply,
  getLeaveApplyById,
  updateLeaveApply

};