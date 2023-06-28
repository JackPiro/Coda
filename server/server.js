require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/mongoose.config'); 

const app = express();
const PORT = process.env.PORT || 5001;

//changed up top to accommodate cookie usage
// app.use(cors());
app.use(express.json());


//this needs to be changed to HTTPS secureOnly when using it in a production setting, this involves an SSL certificate from a domain
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

const connection = require('mongoose').connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully :)');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


app.use('/api/users', require('./routes/user.routes'));
app.use('/api/artists', require('./routes/artist.routes'));
app.use('/api/artist-subscription-groups', require('./routes/artistSubscriptionGroup.routes'));
app.use('/api/goal-based-releases', require('./routes/goalBasedRelease.routes'));
app.use('/api/music', require('./routes/music.routes'));
app.use('/api/crowdfunding-campaigns', require('./routes/crowdfundingCampaign.routes'));
app.use('/api/simple-invite-system', require('./routes/simpleInviteSystem.routes'));
app.use('/api/update-posts', require('./routes/updatePosts.routes'));
app.use('/api/user-engagement-metrics', require('./routes/userEngagementMetrics.routes'));
app.use('/api/NFT-collectibles', require('./routes/NFTCollectible.routes'));
app.use('/api/biggest-supporters', require('./routes/biggestSupporter.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/transaction', require('./routes/transaction.routes'));











