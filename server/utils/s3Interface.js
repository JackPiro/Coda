/*
multer reads the data from the HTTP request and creates a file object that you can access from your route handler. 
without multer, we would have to parse the multipart/form-data request ourself
*/

const multer = require('multer'); //we import the multer module
/*
multer memory storage is essentially the moving van for these music files, the user gives us all their things
and the moving crew puts it into neat boxes aka the multi part form data and packs it neatly into the back of their van
it is held in the van instead of being written to the disk then moved into the new house the AWS storage bucket we made.
*/
const storage = multer.memoryStorage();
//now we hire the moving crew and tell them where it goes, creating an instance of multer
const upload = multer({ storage: storage }).fields([
    { name: 'audioFile', maxCount: 1 },
    { name: 'coverArt', maxCount: 1 }
]);

module.exports = upload;
// const upload = multer({storage: storage})


//this is for interfacing with the s3 bucket
const AWS = require('aws-sdk');

// we make an instance of the s3 bucket and set up our values to be able to connect to it.
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports.s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});



/*
this is important, the s3.upload method from AWS-SDK takes an object as its argument
it needs the bucket name and looks for a key "Bucket", "Key", and "Body".
the next argument is a callback function that executes after the file has tried to be uploaded
it then rejects or resolves it
*/
module.exports.uploadFile = (file) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname, //file is from multer and contains the file name as on your computer
        Body: file.buffer //buffer is where it stores the contents of that file.
    };
    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};


















/*
this is the function to pipe the music to the response directly from stream it gets run when the play button is hit.
it takes the audio file link and starts pulling the music file from the bucket it gets read as it goes.
*/



module.exports.getMusicStreaming = (req, res) => {
    const key = req.params.audioFile; // The id or filename of the music file in the sent request

    //here we don't need the file body because it is in the s3 bucket we just need the name to access it.
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key
    };

    // this is how we set a specified content type for the music file
    res.setHeader('Content-Type', 'audio/mpeg');

    // Create a read stream from S3 and pipe it to the response
    const s3Stream = s3.getObject(params).createReadStream();

    s3Stream.on('error', (error) => {
        console.error(error);
        res.status(500).json({ error: 'Error while streaming the music file' });
    });

    // Pipe the s3 read stream to the response
    s3Stream.pipe(res);
};





