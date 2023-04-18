const UpdatePost = require('../models/UpdatePost');

exports.createUpdatePost = async (req, res) => {
    try {
        const { artistId } = req.params;
        const { title, content } = req.body;

        // Create a new update post
        const newUpdatePost = new UpdatePost({
            artistId,
            title,
            content,
        });

        // Save the update post to the database
        const savedUpdatePost = await newUpdatePost.save();

        // Send the saved update post as a response
        res.status(201).json(savedUpdatePost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllUpdatePosts = async (req, res) => {
    try {
        const { artistId } = req.params;

        // Find all update posts for the artist
        const updatePosts = await UpdatePost.find({ artistId });

        // Send the update posts as a response
        res.status(200).json(updatePosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUpdatePost = async (req, res) => {
    try {
        const { updatePostId } = req.params;

        // Find the update post by its ID
        const updatePost = await UpdatePost.findById(updatePostId);

        // Send the update post as a response
        res.status(200).json(updatePost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUpdatePost = async (req, res) => {
    try {
        const { updatePostId } = req.params;
        const { title, content } = req.body;

        // Update the update post with the new data
        const updatedUpdatePost = await UpdatePost.findByIdAndUpdate(
            updatePostId,
            { title, content },
            { new: true }
        );

        // Send the updated update post as a response
        res.status(200).json(updatedUpdatePost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUpdatePost = async (req, res) => {
    try {
        const { updatePostId } = req.params;

        // Delete the update post by its ID
        await UpdatePost.findByIdAndDelete(updatePostId);

        // Send a success message as a response
        res.status(200).json({ message: "Update post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
