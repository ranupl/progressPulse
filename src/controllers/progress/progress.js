const progressService = require("../../services/progress/progress");

async function createProgress(req, res) {
  try {
    const { id, updates } = req.body;
    const progress = await progressService.createProgress({
      id,
      updates
    });
    res.json(progress);
  } catch (error) {
    console.error("Error creating progress:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the progress" });
  }
}

async function getAllTeam(req, res) {
  try {
    const team = await teamService.getAllTeam();
    res.json(team);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({ error: "An error occurred while fetching team" });
  }
}

async function getTeamById(req, res) {
  const teamId = req.params.id;

  try {
    const team = await teamService.getTeamById(teamId);
    if (!team) {
      res.status(404).json({ error: "Team not found" });
    } else {
      res.json(team);
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateTeam(req, res) {
  const teamId = req.params.id;
  const updateTeamData = req.body;

  try {
    const updatedTeam = await teamService.updateTeam(teamId, updateTeamData);
    res.json(updatedTeam);
  } catch (err) {
    console.log(err);
  }
}

async function deleteTeam(req, res) {
  const teamId = req.params.id;

  try {
    const deletedTeam = await teamService.deleteTeam(teamId);
    res.json(deletedTeam);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    createProgress
//   getAllTeam,
//   getTeamById,
//   updateTeam,
//   deleteTeam
}