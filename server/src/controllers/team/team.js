const teamService = require("../../services/team/team");

async function createTeam(req, res) {
  try {
    const { id, title, description, identifier } = req.body;
    const sessionData = req.session.user;
    const team = await teamService.createTeam({
      id,
      title,
      description,
      identifier,
      sessionData
    });
    res.json(team);
  } catch (error) {
    console.error("Error creating team:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the team" });
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
  const selectedDate = req.query.selectedDate;

  try {
    const team = await teamService.getTeamById(teamId, selectedDate);
    if (!team) {
      res.status(404).json({ error: "Team not found" });
    } else {
      res.status(200).json({ message: 'successful', team });
    }
  } catch (err) {
    console.log(err);
  }
}

async function getTeamMember(req, res) {
  const teamId = req.params.id;

  try {
    const team = await teamService.getTeamMember(teamId);
    if (!team) {
      res.status(404).json({ error: "Team not found" });
    } else {
      res.status(200).json({ message: 'successful', team });
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
  createTeam,
  getAllTeam,
  getTeamById,
  getTeamMember,
  updateTeam,
  deleteTeam,
}