const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const breed = process.argv[2];
const searchUrl = url + breed;

request(searchUrl, (err, response, body) => {
  // if the url is invalid, report the error
  if (err) {
    console.log(`The following error was found: ${err.code}`);
    return;
  }
  // parse the body information into data
  const data = JSON.parse(body);
  // if data[0] is undefined, it means that the requested search breed did not exist and resulted in nothing
  if (data[0] === undefined) {
    console.log(`The breed you searched for: "${breed}", does not exist.`);
    return;
  }
  // if the requested breed is found, print the name and the description to the console
  console.log(data[0].name);
  console.log(data[0].description);
});