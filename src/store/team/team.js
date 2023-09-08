const db = require("../db");

async function createTeam(teamData) {
  const { id, title, description, release_notes } = teamData;
  const query =
    "INSERT INTO team (id, title, description, release_notes) VALUES ( ?, ?, ?, ?)";

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        query,
        [ id, title, description, release_notes ],
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

async function getAllTeam() {
  const query = "SELECT * FROM team";
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

async function getTeamById(teamId) {
  const query = "SELECT * FROM team WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [teamId], (err, results) => {
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

async function updateTeam(teamId, updatedTeamData) {
  const query = "UPDATE team SET ? WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [updatedTeamData, teamId], (err, results) => {
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
  createTeam,
  getAllTeam,
  getTeamById, 
  updateTeam
  // deleteEmployee
};