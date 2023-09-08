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

async function getAllProgress(req, res) {
  try {
    const progress = await progressService.getAllProgress();
    res.json(progress);
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ error: "An error occurred while fetching progress" });
  }
}

async function getProgressById(req, res) {
  const progressId = req.params.id;

  try {
    const progress = await progressService.getProgressById(progressId);
    if (!progress) {
      res.status(404).json({ error: "No Progress" });
    } else {
      res.json(progress);
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
    createProgress,
    getAllProgress,
    getProgressById
//   updateTeam,
//   deleteTeam
}