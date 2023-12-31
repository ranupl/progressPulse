const progressService = require("../../services/progress/progress");

async function createProgress(req, res) {
  try {
    const { id, updates } = req.body;
    const sessionData = req.session.user;
    const progress = await progressService.createProgress({
      id,
      updates,
      sessionData
    });
    res.send(progress);
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
  const employeeId = req.params.id;
 
  try {
    const progress = await progressService.getProgressById(employeeId);
    if (!progress) {
      res.status(404).json({ error: "No Progress" });
    } else {
      res.status(200).json({ message: 'progresses', progress });
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateProgress(req, res) {
  const progressId = req.params.id;
  const updateProgressData = req.body;

  try {
    const updatedProgress = await progressService.updateProgress(progressId, updateProgressData);
    res.status(200).json({ message: 'success', updatedProgress: updatedProgress });
  } catch (err) {
    console.log(err);
  }
}

async function deleteProgress(req, res) {
  const progressId = req.params.id;

  try {
    const deletedProgress = await progressService.deleteProgress(progressId);
    res.json(deletedProgress);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    createProgress,
    getAllProgress,
    getProgressById,
    updateProgress,
    deleteProgress
}