const { tryCatch } = require('fp-ts/lib/Option');
const Music = require('../models/Music');
const { uploadFile, s3 } = require('../utils/s3Interface')






module.exports.createMusic = async (req, res) => {
    try {
        const artistID = req.user.id;
        //we use an object with an array value for these incase they need to add multiple songs to an album or multiple covers
        const audioFile = req.files['audioFile'][0];
        const coverArt = req.files['coverArt'][0];
        const s3ResponseAudio = await uploadFile(audioFile); //use this to upload
            // s3Response.Location should be the URL of the uploaded file on S3
        const s3ResponseCover = await uploadFile(coverArt);

        const newMusic = new Music({
            ...req.body,
            audioFile: s3ResponseAudio.Location,
            coverArt: s3ResponseCover.Location,
            artistID
        })
        console.log(s3ResponseAudio, s3ResponseCover)
        await newMusic.save();
        res.status(201).json({newMusic})
        console.log(newMusic)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/*
^using the spread operator is the same as
const newMusic = new Music({
    title: req.body.title,
    artist: req.body.artist,
    fileLocation: s3Response.Location
    you get it
});
*/

module.exports.streamMusic = async (req, res) => {
    
}



module.exports.musicSearch = async (req, res) => {
    const { query } = req.query;
    try {
        const results = await Music.fuzzySearch(query)
//{ $search: query } is specifying that MongoDB should look for the query string in the indexed fields.

        res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports.getMusicById = async (req, res) => {
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



module.exports.getAllMusic = async (req, res) => {
    try {
        const music = await Music.find();
        res.status(200).json(music);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports.updateMusic = async (req, res) => {
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

// module.exports.deleteMusic = async (req, res) => {
//     try {
//         const deletedMusic = await Music.findByIdAndDelete(req.params.id);
//         if (!deletedMusic) {
//             return res.status(404).json({ message: 'Music not found' });
//         }
//         res.status(200).json({ message: 'Music deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };



module.exports.deleteMusic = async (req, res) => {
    try {
        const music = await Music.findById(req.params.id);
        if (!music) {
            return res.status(404).json({ message: 'Music not found' });
        }

        // check if any other songs are using the same cover art
        const otherSongsWithSameCoverArt = await Music.find({ coverArt: music.coverArt, _id: { $ne: music._id } });

        // delete file from S3 before removing from db
        let params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: music.audioFile
        };





        s3.deleteObject(params, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                // if no error, delete music from db this returns the deleted document or and error so we can access it with doc
                Music.findByIdAndDelete(req.params.id)
                .then((doc) => {
                    if(doc){
                        console.log(doc)
                        // if no other songs are using the same cover art, delete it from S3
                        if (otherSongsWithSameCoverArt.length === 0) {
                            let coverArtParams = {
                                Bucket: process.env.AWS_BUCKET_NAME,
                                Key: music.coverArt
                            };
                            s3.deleteObject(coverArtParams, (err, data) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    res.send(doc);
                                }
                            });
                        } else {
                            res.send(doc);
                        }
                    } else {
                        console.log("Error in music delete : Music not found");
                    }
                })
                .catch(err => {
                    console.log("Error in music delete :" + err);
                });
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log('couldnt delete music...')
    }
};










module.exports.getMusicByArtist = async (req, res) => {
    try {
        const artistId = req.params.artistId;
        const musicByArtist = await Music.find({ artistId: artistId });
        res.status(200).json(musicByArtist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
