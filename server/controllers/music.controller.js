const { tryCatch } = require('fp-ts/lib/Option');
const Music = require('../models/Music');

exports.createMusic = async (req, res) => {
    try {
        const newMusic = new Music(req.body);
        await newMusic.save();
        res.status(201).json(newMusic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.createMusic = async (req, res) => {
    try {
        const artistID = req.user._id
        const newMusic = new Music(req.body)

    } catch {

    }
}

exports.getAllMusic = async (req, res) => {
    try {
        const music = await Music.find();
        res.status(200).json(music);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMusicById = async (req, res) => {
    try {
        const music = await Music.findById(req.params.id);
        if (!music) {
            return res.status(404).json({ message: 'Music not found' });
        }
        res.status(200).json(music);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMusic = async (req, res) => {
    try {
        const updatedMusic = await Music.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMusic) {
            return res.status(404).json({ message: 'Music not found' });
        }
        res.status(200).json(updatedMusic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMusic = async (req, res) => {
    try {
        const deletedMusic = await Music.findByIdAndDelete(req.params.id);
        if (!deletedMusic) {
            return res.status(404).json({ message: 'Music not found' });
        }
        res.status(200).json({ message: 'Music deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMusicByArtist = async (req, res) => {
    try {
        const artistId = req.params.artistId;
        const musicByArtist = await Music.find({ artistId: artistId });
        res.status(200).json(musicByArtist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
