const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/user/:id/follow', UserController.followUser);
router.post('/user/:id/unfollow', UserController.unfollowUser);
router.post('/create', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);
router.put('/:userId/update-subscription-price', userController.updateSubscriptionPrice);
router.get('/:userId/subscription-price', userController.getSubscriptionPrice);


module.exports = router;
