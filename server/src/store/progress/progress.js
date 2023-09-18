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

async function createProgress(progressData) {
  const randomId = generateRandomId(5);
  const { id, updates } = progressData;
  const query =
    "INSERT INTO progress (id, updates) VALUES ( ?, ?)";

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        query,
        [randomId, updates],
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

async function getAllProgress() {
  const query = "SELECT * FROM progress";
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

async function getProgressById(progressId) {
  const query = "select * from progress p join employee_progress_map epm on epm.progress_id = p.id where epm.employee_id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [progressId], (err, results) => {
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

async function updateProgress(progressId, updatedProgressData) {
  const query = "UPDATE progress SET ? WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [updatedProgressData, progressId], (err, results) => {
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

async function deleteProgress(progressId) {
  const query = "DELETE FROM progress WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [progressId], (err, results) => {
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
    createProgress,
    getAllProgress,
    getProgressById,
    updateProgress,
    deleteProgress
};