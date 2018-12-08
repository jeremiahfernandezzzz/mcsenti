// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const brain = require('brain.js');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

var net = new brain.recurrent.LSTM();

net.train([
  'doe, a deer, a female deer',
  'ray, a drop of golden sun',
  'me, a name I call myself'
]);

//var output = net.run('ray');

//console.log(output);
