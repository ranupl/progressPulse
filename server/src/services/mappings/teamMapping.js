const teamStore = require("../../store/mappings/teamMapping");

async function teamEmployeeMap(teamData) {
    try {
        const teamMap = await teamStore.teamEmployeeMap(teamData);
        return teamMap;
    } catch (error) {
        console.log(error);
    }
}

async function getTeamEmployeeMapById(teamId) {
    try {
      const teamMapping = await teamStore.getTeamEmployeeMapById(teamId);
      return teamMapping;
    } catch (error) {
      console.log(error);
    }
  }

async function deleteTeamEmployeeMap(employeeId) {
    try {
      const existingTeam = await teamStore.getTeamEmployeeMapById(employeeId);
      if (!existingTeam) {
        throw new Error("Mapping not found");
      }
      const deletedTeam = await teamStore.deleteTeamEmployeeMap(employeeId);
      return deletedTeam;
    } catch (error) {
      console.log(error);
    }
  }

module.exports = { teamEmployeeMap, getTeamEmployeeMapById, deleteTeamEmployeeMap};