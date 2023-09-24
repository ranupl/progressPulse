const db = require("../db");

async function teamEmployeeMap(teamData) {
    const { team_id, employee_id } = teamData;
    const query =
        "INSERT INTO employee_team_map (team_id, employee_id) VALUES ( ?, ?)";

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(
                query,
                [team_id, employee_id],
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

async function getTeamEmployeeMapById(teamId) {
    const query = "select * from employee_team_map where team_id = ?";
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

async function deleteTeamEmployeeMap(teamId) {
    const query = "DELETE FROM employee_team_map WHERE employee_id = ?";
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

module.exports = { teamEmployeeMap, getTeamEmployeeMapById, deleteTeamEmployeeMap };