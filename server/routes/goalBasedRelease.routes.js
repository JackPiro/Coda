const express = require('express');
const router = express.Router();
const goalBasedReleaseController = require('../controllers/goalBasedRelease.controller');

router.get('/api/songs/active-goals', goalBasedReleaseController.getSongsWithActiveGoals);
router.post('/api/songs/:songId/goals', goalBasedReleaseController.createGoalForSong);
router.get('/api/songs/:songId/goals', goalBasedReleaseController.getGoalForSong);
router.put('/api/songs/:songId/goals', goalBasedReleaseController.updateGoalForSong);
router.delete('/api/songs/:songId/goals', goalBasedReleaseController.deleteGoalForSong);
router.post('/api/songs/:songId/goals/contribute', goalBasedReleaseController.contributeToGoal);
router.get('/api/songs/:songId/goals/contributions', goalBasedReleaseController.getContributionsForGoal);

module.exports = router;
