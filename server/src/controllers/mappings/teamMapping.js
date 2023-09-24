const teamService = require("../../services/mappings/teamMapping");

async function teamEmployeeMap(req, res) {
    try {
        const { team_id, employee_id } = req.body;
        const teamEmployeeMap = await teamService.teamEmployeeMap({
            team_id,
            employee_id
        });
        res.json(teamEmployeeMap);
    } catch (error) {
        console.error("Error creating team:", error);
        res
            .status(500)
            .json({ error: "An error occurred while creating the team" });
    }
}

async function getTeamEmployeeMapById(req, res) {
    const teamId = req.params.id;
  
    try {
      const teamMapping = await teamService.getTeamEmployeeMapById(teamId);
      if (!team) {
        res.status(404).json({ error: "Mapping not found" });
      } else {
        res.status(200).json({ message: 'successful', teamMapping });
      }
    } catch (err) {
      console.log(err);
    }
  }

async function deleteTeamEmployeeMap(req, res) {
    const teamId = req.params.id;

    try {
        const deletedTeam = await teamService.deleteTeamEmployeeMap(teamId);
        res.json(deletedTeam);
    } catch (err) {
        console.log(err);
    }
}

module.exports = { teamEmployeeMap, getTeamEmployeeMapById, deleteTeamEmployeeMap };  