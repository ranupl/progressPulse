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

async function updateProgress(progressId, updateProgressData) {
  try {
    const existingProgress = await progressStore.getProgressById(progressId);
    if (!existingProgress) {
      throw new Error("No progress");
    }
    const updatedProgress = await progressStore.updateProgress(progressId, updateProgressData);
    return updatedProgress;
  } catch (error) {
    console.log(error);
  }
}

async function deleteProgress(progressId) {
  try {
    const existingProgress = await progressStore.getProgressById(progressId);
    if (!existingProgress) {
      throw new Error("No progress");
    }
    const deletedProgress = await progressStore.deleteProgress(progressId);
    return deletedProgress;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    createProgress,
    getAllProgress,
    getProgressById,
    updateProgress,
    deleteProgress
}