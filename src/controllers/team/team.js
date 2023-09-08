const teamService = require("../../services/team/team");

async function createTeam(req, res) {
  try {
    const { id, title, description, release_notes } = req.body;
    const team = await teamService.createTeam({
      id,
      title,
      description,
      release_notes
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

async function deleteEmployee(req, res) {
  const employeeId = req.params.id;

  try {
    const deletedEmployee = await employeeService.deleteEmployee(employeeId);
    res.json(deletedEmployee);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createTeam,
  getAllTeam,
  getTeamById,
  updateTeam
  // deleteEmployee
}