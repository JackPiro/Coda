const express = require('express');
const router = express.Router();
const Campaign = require('../models/CrowdfundingCampaign'); // Import the Campaign model

// Create a new campaign
router.post('/', async (req, res) => {
    try {
        const { artistId, title, description, goalAmount, endDate } = req.body;

        // Create a new instance of the Campaign model
        const newCampaign = new Campaign({
            artistId,
            title,
            description,
            goalAmount,
            endDate
        });

        // Save the new campaign to the database
        const savedCampaign = await newCampaign.save();

        // Send a successful response with the saved campaign
        res.status(201).json(savedCampaign);
    } catch (error) {
        // Handle errors and send an error response
        res.status(400).json({ message: 'Error creating campaign', error });
    }
});

// Get all campaigns for a specific artist
router.get('/artist/:artistId', async (req, res) => {
    try {
        const { artistId } = req.params;

        const campaigns = await CrowdfundingCampaign.find({ artistId: artistId });

        if (!campaigns) {
            return res.status(404).json({ message: 'No campaigns found for this artist.' });
        }

        res.status(200).json(campaigns);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
/*
In this route, we're using router.get to handle a GET request. 
We specify the URL path as /artist/:artistId, 
where :artistId is a route parameter that represents the artist's ID. 
Inside the route handler function, we extract the artistId from req.params. 
Then, we use the CrowdfundingCampaign model's find method to query the database for
all crowdfunding campaigns with the given artistId. If no campaigns are found,
we return a 404 status code with an appropriate message; otherwise, 
we return the campaigns with a 200 status code. If there's any error, 
we return a 500 status code indicating a server error.
*/

// Get a single campaign by ID
router.get('/:campaignId', async (req, res) => {
    try {
        const { campaignId } = req.params;
        const campaign = await CrowdfundingCampaign.findById(campaignId);
        if (!campaign) {
        return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json(campaign);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


  // Delete a campaign
router.delete('/:campaignId', async (req, res) => {
    try {
        const { campaignId } = req.params;
        const campaign = await CrowdfundingCampaign.findByIdAndDelete(campaignId);
        if (!campaign) {
        return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json({ message: 'Campaign deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Contribute to a campaign
router.post('/:campaignId/contribute', async (req, res) => {
    try {
        const { campaignId } = req.params;
        const { amount, userId } = req.body; // You may need to adjust this based on how you track contributions.

        const campaign = await CrowdfundingCampaign.findById(campaignId);
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }

        // Add the contribution logic here.
        // Update the campaign's currentAmount and store the contribution.

        res.status(200).json({ message: 'Contribution successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Fetch campaign contributions
router.get('/:campaignId/contributions', async (req, res) => {
    try {
        const { campaignId } = req.params;

        // Retrieve contributions related to the campaign from your database.
        // You may need to adjust this based on how you store contributions.

        res.status(200).json(contributions);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Mark a campaign as completed or closed
router.put('/:campaignId/close', async (req, res) => {
    try {
        const { campaignId } = req.params;

        const campaign = await CrowdfundingCampaign.findByIdAndUpdate(campaignId, { status: 'closed' }, { new: true });
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }

        res.status(200).json({ message: 'Campaign closed successfully', campaign });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
