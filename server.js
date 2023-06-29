const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.port || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '6A-KJwwL3pZB0bVQwPsRk_WqPL0_infWGIhjzrMDnjxC3bpQHJaahidTx7PfIct9_U0a7LTrG5HmVD7UmI4QDbBJ8ulvVkHbnuEjtkgp526gqRVV8d8uhVF_80KaZHYx';

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});