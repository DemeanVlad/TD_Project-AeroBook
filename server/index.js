var api = require('./src/api.js').app;
const fs = require('fs');
const carsFilepath = './src/cars.json';

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

