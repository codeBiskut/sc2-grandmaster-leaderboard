const axios = require('axios')
const dotenv = require('dotenv')
const Token = require('../models/Token')
dotenv.config();

exports.getAuthToken = async (req, res) => {
    let authToken;

    const authUrl = 'https://us.battle.net/oauth/token';
    const grantType = 'client_credentials';

    const requestData = `grant_type=${grantType}`;

    const headers = {
        'Authorization': `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    axios.post(authUrl, requestData, { headers })
        .then(async response => {
            authToken = response.data.access_token;

            try {
                const newToken = new Token({ access_token: authToken });
                await newToken.save();
                console.log('Token saved successfully');
              } catch (error) {
                console.error('Error saving token:', error);
              }

            res.json({ authToken })
            console.log(`Access Token: ${authToken}`);
        })
        .catch(error => {
            console.error('Error fetching OAuth token:', error);
        });
};
