const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended : true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('This is from NodeJS');
});

app.get('/api/hello-world', (req, res) => {
  res.send('This is Hello World from NodeJS.');
});

app.get('/api/get-names', (req, res) => {
  const names = ['John', 'Jenny', 'Joe'];
  res.send(names);
});

app.post('/api/validate-username', (req, res) => {
  const username = req.body.username;
  res.send('The received value of username is ' + username);
});

app.listen(5000, () => {
  console.log('NodeJS Server is started');
});