const Artist = require('../models/Artist');


//already have this in create user
module.exports.createArtist = async (req, res) => {
    try {
        // Create a new artist
        const newArtist = new Artist(req.body);
        // Save the artist
        await newArtist.save();
        // Respond with the artist
        res.status(201).json(newArtist);
    } catch (error) {
        // Respond with an error
        res.status(400).json({ message: error.message });
    }
};



// Get all artists
module.exports.getArtists = async (req, res) => {
    try {
        // Find all the artists in the database
        const artists = await Artist.find();
        // Send the artists as a JSON response
        res.json(artists);
    } catch (error) {
        // If there's an error, send an error response
        res.status(500).json({ message: error.message });
    }
};

module.exports.updateArtistById = async (req, res) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedArtist) {
            res.status(404).json({ message: 'Artist not found' });
        } else {
            res.json(updatedArtist);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports.deleteArtistById = async (req, res) => {
    try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
        if (!deletedArtist) {
            res.status(404).json({ message: 'Artist not found' });
        } else {
            res.json({ message: 'Artist deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
