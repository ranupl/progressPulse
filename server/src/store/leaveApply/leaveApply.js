const { db, query } = require("../db");
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
  const { id, no_of_days, type, reason, start_date, end_date, totalLeave, sessionData } = leaveApplyData;
  const status = type === '1' ? 'approved' : 'pending';
  const uid = sessionData.id;

  try {
    await query("START TRANSACTION");

    const leaveCountsQuery = "SELECT sick, casual, total FROM leaves WHERE employee_id = ?";
    const [currentLeaveCounts] = await query(leaveCountsQuery, [uid]);
    let { sick, casual, total } = currentLeaveCounts;
    
    if (type === '1') {
      sick += no_of_days;
    } else {
      casual += no_of_days;
    }

    total = totalLeave - no_of_days;

    const leaveMappingQuery = "UPDATE leaves SET sick = ?, casual = ?, total = ? WHERE employee_id = ?";
    await query(leaveMappingQuery, [sick, casual, total, uid]);

    const leaveApplyCreationQuery = "INSERT INTO leave_apply (id, employee_id, no_of_days, type, reason, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    await query(leaveApplyCreationQuery, [randomId, uid, no_of_days, type, reason, start_date, end_date, status]);

    await query("COMMIT");
    return { success: true, message: "Leave application created successfully." };
  } catch (err) {
    console.error(err);
    await query("ROLLBACK");
    throw err;
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