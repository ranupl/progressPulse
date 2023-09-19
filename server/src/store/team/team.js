const db = require("../db");

async function createTeam(teamData) {
  const { id, title, description, release_notes } = teamData;
  const query =
    "INSERT INTO team (id, title, description, release_notes) VALUES ( ?, ?, ?, ?)";

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        query,
        [id, title, description, release_notes],
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
  const query = "select * from progress p join employee_progress_map epm on p.id = epm.progress_id join employee_team_map etm on etm.employee_id = epm.employee_id join employee e on e.id = epm.employee_id where etm.team_id = ?";
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
  createTeam,
  getAllTeam,
  getTeamById,
  updateTeam,
  deleteTeam
};