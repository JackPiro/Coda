// biggestSupporterRoutes.js
const express = require('express');
const router = express.Router();
const biggestSupporterController = require('../controllers/biggestSupporterController');

router.get('/artist/:artistId', biggestSupporterController.getTopSupportersForArtist);

module.exports = (app) => {
    app.use('/api/biggest-supporters', router);
};
