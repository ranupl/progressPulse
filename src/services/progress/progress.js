const progressStore = require("../../store/progress/progress");

async function createProgress(progressData) {
  try {
    const createdProgress = await progressStore.createProgress(progressData);
    return createdProgress;
  } catch (error) {
    console.log(error);
  }
}

async function getAllProgress() {
  try {
    const allProgress = await progressStore.getAllProgress();
    return allProgress;
  } catch (error) {
    console.log(error);
  }
}

async function getProgressById(progressId) {
  try {
    const progress = await progressStore.getProgressById(progressId);
    return progress;
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

async function deleteTeam(teamId) {
  try {
    const existingTeam = await teamStore.getTeamById(teamId);
    if (!existingTeam) {
      throw new Error("Team not found");
    }
    const deletedTeam = await teamStore.deleteTeam(teamId);
    return deletedTeam;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    createProgress,
    getAllProgress,
    getProgressById
//   updateTeam,
//   deleteTeam
}