const db = require("../db");

async function createProgress(progressData) {
  const { id, updates } = progressData;
  const query =
    "INSERT INTO progress (id, updates) VALUES ( ?, ?)";

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        query,
        [id, updates],
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
  const query = "SELECT * FROM progress WHERE id = ?";
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

async function deleteTeam(teamId) {
  const query = "DELETE FROM team WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [teamId], (err, results) => {
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
    updateProgress
//   deleteTeam
};