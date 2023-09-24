const User = require('../models/User');
const Artist = require('../models/Artist');
const UserEngagementMetrics = require('../models/UserEngagementMetrics');
const ArtistSubscription = require('../models/ArtistSubscription')

//trying this one
// exports.createUser = async (req, res) => {
//     try {
//         const newUser = new User(req.body);
//         await newUser.save();

//         if (newUser.role === 'artist') {
//             const newArtist = new Artist({ user: newUser._id });
//             await newArtist.save();

//             const newUserEngagementMetrics = new UserEngagementMetrics({ userID: newUser._id, artistID: newArtist._id });
//             await newUserEngagementMetrics.save();
//         }

//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        if (newUser.role === 'artist') {
            // Create Artist Document
            console.log('trying to create new artist document:', newUser)
            const newArtist = new Artist({
                userID: newUser._id,
                artistName: `${newUser.firstName} ${newUser.lastName}`, // Concatenating the first and last name as an example
            });
            await newArtist.save();
            console.log("created artist doc", newArtist)

            // Create ArtistSubscriptionGroup Document
            const newArtistGroup = new ArtistSubscription({
                artistID: newArtist._id,
                groupName: `${newUser.firstName}'s Group`, // Example name based on user's first name
                description: `Exclusive group for ${newUser.firstName}`,
                subscriptionPrice: 15, // Default price, you can change it
                subscribers: [],
                exclusiveContent: []
            });
            await newArtistGroup.save();
            console.log("created artist subscription doc", newArtistGroup)

            // Create UserEngagementMetrics Document (based on your original code)
            // const newUserEngagementMetrics = new UserEngagementMetrics({ 
            //     userID: newUser._id, 
            //     artistID: newArtist._id 
            // });
            // await newUserEngagementMetrics.save();
        }

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSubscriptionPrice = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        const newSubscriptionPrice = calculateNewSubscriptionPrice(user.successfulInvites);
        user.subscriptionPrice = newSubscriptionPrice;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating subscription price', error });
    }
};

exports.getSubscriptionPrice = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        res.status(200).json({ subscriptionPrice: user.subscriptionPrice });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subscription price', error });
    }
};

exports.toggleFollowUser = async (req, res) => {
    try {
        const targetUser = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id); // req.user.id should be the id of the currently logged-in user

        const isFollowing = currentUser.following.some(id => id.equals(targetUser._id));

        if (isFollowing) {
            // User is currently following, so unfollow
            targetUser.followers = targetUser.followers.filter(id => !id.equals(currentUser._id));
            currentUser.following = currentUser.following.filter(id => !id.equals(targetUser._id));
            await targetUser.save();
            await currentUser.save();

            res.status(200).json({ message: 'Unfollowed user successfully.' });
        } else {
            // User is not currently following, so follow
            if (!targetUser.followers.includes(currentUser._id)) {
                targetUser.followers.push(currentUser._id);
                await targetUser.save();
            }

            if (!currentUser.following.includes(targetUser._id)) {
                currentUser.following.push(targetUser._id);
                await currentUser.save();
            }

            res.status(200).json({ message: 'Followed user successfully.' });
        }

    } catch (error) {
        res.status(500).json({ message: 'An error occurred.', error });
    }
}

