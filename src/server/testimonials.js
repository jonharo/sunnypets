'use strict';

const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

// Yelp API Credentials
const clientId = 'XXXXXXXXXXXX',
  clientSecret = 'XXXXXXXXXXXX';

router.get('/yelp', (req, res) => {
  yelp.accessToken(clientId, clientSecret)
    .then(response => {
      const client = yelp.client(response.jsonBody.access_token);
      client.reviews('sunny-pets-san-diego')
        .then(response => {
          res.send(response);
        })
        .catch(err => {
          console.log("Error in the reviews function: " + err);
          console.error(err)
        })
    })
    .catch(err => console.log(err));
});




// // Configure Client
// const client = yelp.client(yelp.accessToken(clientId, clientSecret)
//   .then(response => console.log("Access token " + response.jsonBody.access_token))
//   .catch(err => console.log("Error in the client " + err))
// );
//
// client.reviews('sunny-pets-san-diego')
//   .then(response => reviews = response)
//   .catch(err => {
//     console.log("Error in the reviews function " + err);
//     console.error(err)
//   });

module.exports = router;
