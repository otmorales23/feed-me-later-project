'use strict';

const yelp = require('yelp-fusion');

const apiKey = '6A-KJwwL3pZB0bVQwPsRk_WqPL0_infWGIhjzrMDnjxC3bpQHJaahidTx7PfIct9_U0a7LTrG5HmVD7UmI4QDbBJ8ulvVkHbnuEjtkgp526gqRVV8d8uhVF_80KaZHYx';

const searchRequest = {
  //TODO: create variable for user inputs for location, keyword term, price
  location: 'san jose, ca',
  term: 'italian',
  limit: '5',
  price: '1'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  // retrieve responses for business names
  const firstResultName = response.jsonBody.businesses[0].name;
  const secondResultName = response.jsonBody.businesses[1].name;
  const thirdResultName = response.jsonBody.businesses[2].name;
  const fourthResultName = response.jsonBody.businesses[3].name;
  const fifthResultName = response.jsonBody.businesses[4].name;
  // retrieve responses for business locations
  const firstResultLocation = response.jsonBody.businesses[0].location;
  const secondResultLocation = response.jsonBody.businesses[1].location;
  const thirdResultLocation = response.jsonBody.businesses[2].location;
  const fourthResultLocation = response.jsonBody.businesses[3].location;
  const fifthResultLocation = response.jsonBody.businesses[4].location;
  // stringify the responses received
  const firstResultNameJson = JSON.stringify(firstResultName, null, 4);
  const secondResultNameJson = JSON.stringify(secondResultName, null, 4);
  const thirdResultNameJson = JSON.stringify(thirdResultName, null, 4);
  const fourthResultNameJson = JSON.stringify(fourthResultName, null, 4);
  const fifthResultNameJson = JSON.stringify(fifthResultName, null, 4);
  const firstResultLocationJson = JSON.stringify(firstResultLocation, null, 4);
  const secondResultLocationJson = JSON.stringify(secondResultLocation, null, 4);
  const thirdResultLocationJson = JSON.stringify(thirdResultLocation, null, 4);
  const fourthResultLocationJson = JSON.stringify(fourthResultLocation, null, 4);
  const fifthResultLocationJson = JSON.stringify(fifthResultLocation, null, 4);
  // log the stringified responses
  console.log(firstResultNameJson);
  console.log(firstResultLocationJson);
  console.log(secondResultNameJson);
  console.log(secondResultLocationJson);
  console.log(thirdResultNameJson);
  console.log(thirdResultLocationJson);
  console.log(fourthResultNameJson);
  console.log(fourthResultLocationJson);
  console.log(fifthResultNameJson);
  console.log(fifthResultLocationJson);
}).catch(e => {
  console.log(e);
});