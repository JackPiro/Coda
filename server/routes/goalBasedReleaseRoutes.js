const express = require('express');
const router = express.Router();
const goalBasedReleaseController = require('../controllers/goalBasedReleaseController');

router.get('/songs/active-goals', goalBasedReleaseController.getSongsWithActiveGoals);
router.post('/songs/:songId/goals', goalBasedReleaseController.createGoalForSong);
router.get('/songs/:songId/goals', goalBasedReleaseController.getGoalForSong);
router.put('/songs/:songId/goals', goalBasedReleaseController.updateGoalForSong);
router.delete('/songs/:songId/goals', goalBasedReleaseController.deleteGoalForSong);
router.post('/songs/:songId/goals/contribute', goalBasedReleaseController.contributeToGoal);
router.get('/songs/:songId/goals/contributions', goalBasedReleaseController.getContributionsForGoal);

module.exports = router;
