const request = require('request');


const fetchBreedDescription = (breedName, callback) => {

  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(url, (err, response, body) => {
    // if the url is invalid, report the error
    if (err) {
      callback(`The following error was found: ${err}`, null);
      return;
    }
    // parse the body information into data
    const breed = JSON.parse(body);
    // if breed[0] is undefined, it means that the requested search breed did not exist and resulted in nothing
    if (!breed[0]) {
      callback(`The breed you searched for: "${breedName}", does not exist.`, null);
      return;
    }
    // if the requested breed is found, return the name and the description to the console
    callback(null, breed[0].description);
  });
};

module.exports = fetchBreedDescription;