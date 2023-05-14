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

// const upload = multer({storage: storage})

module.exports = upload;


//this is for interfacing with the s3 bucket
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports.uploadFile = (file) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer
    };

    return new Promise((resolve, reject) => {
        s3.upload(params, function(err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};



