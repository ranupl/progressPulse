const {db , query} = require("../db");

function generateRandomId(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    id += charset.charAt(randomIndex);
  }
  return id;
}

async function createTeam(teamData) {
  const randomId = generateRandomId(5);
  const { id, title, description, identifier, sessionData } = teamData;
  const uid = sessionData.id;

  const titleCheckQuery = "SELECT COUNT(*) AS count FROM team WHERE title = ?";
    const titleCheckResult = await query(titleCheckQuery, [title]);

    if (titleCheckResult[0].count > 0) {
      return { success: false, message: "Team title already exists." };
    }

  try {
    await query("START TRANSACTION");

    const teamCreationQuery = "INSERT INTO team (id, title, description) VALUES (?, ?, ?)";
    await query(teamCreationQuery, [randomId, title, description, identifier]);

    const teamMappingQuery = "INSERT INTO employee_team_map (team_id, employee_id ) VALUES (?, ?)";
    await query(teamMappingQuery, [randomId, uid]);

    await query("COMMIT");
    return { success: true, message: "Team created successfully." };
  } catch (err) {
    await query("ROLLBACK");
    console.error(err);
    throw err;
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

async function getTeamById(teamId, selectedDate) {
  const query = "select * from progress p join employee_progress_map epm on p.id = epm.progress_id join employee_team_map etm on etm.employee_id = epm.employee_id join employee e on e.id = epm.employee_id where etm.team_id = ? and DATE(p.created) = ?";
  
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [teamId, selectedDate], (err, results) => {
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

async function getTeamMember(teamId) {
  const query = "select e.id, e.first_name, e.last_name from employee e join employee_team_map etm on e.id = etm.employee_id where etm.team_id = ?";
  
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
  getTeamMember,
  deleteTeam,
};