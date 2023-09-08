const teamStore = require("../../store/team/team");

async function createTeam(teamData) {
  try {
    const createdTeam = await teamStore.createTeam(teamData);
    return createdTeam;
  } catch (error) {
    console.log(error);
  }
}

async function getAllTeam() {
  try {
    const allTeam = await teamStore.getAllTeam();
    return allTeam;
  } catch (error) {
    console.log(error);
  }
}

async function getTeamById(teamId) {
  try {
    const team = await teamStore.getTeamById(teamId);
    return team;
  } catch (error) {
    console.log(error);
  }
}

async function updateTeam(teamId, updatedTeamData) {
  try {
    const existingTeam = await teamStore.getTeamById(teamId);
    if (!existingTeam) {
      throw new Error("Team not found");
    }
    const updatedTeam = await teamStore.updateTeam(teamId, updatedTeamData);
    return updatedTeam;
  } catch (error) {
    console.log(error);
  }
}

async function deleteEmployee(employeeId) {
  try {
    const existingEmployee = await employeeStore.getEmployeeById(employeeId);
    if (!existingEmployee) {
      throw new Error("Employee not found");
    }
    const deletedEmployee = await employeeStore.deleteEmployee(employeeId);
    return deletedEmployee;
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
}