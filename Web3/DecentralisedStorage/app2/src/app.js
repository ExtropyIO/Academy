const express = require('express');
const path = require('path');

const ipfsApi = require('../public/javascript/ipfsApi.js');

const app = express();

const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath, { extensions: ['html'] }));
app.use(express.json());

app.get('', (req, res) => {
  res.send('<h1>Home page</h1>');
});

app.listen(3000, () => {
  console.log('Server is up and running on PORT 3000.');
});

app.post('/addData', (req, res) => {
  ipfsApi
    .ipfsAdd(req.body.data)
    .then((response) => {
      res.send(response);
    })
    .catch((e) => {
      res.status(500, {
        error: e,
      });
    });
});

app.post('/getData', (req, res) => {
  ipfsApi
    .ipfsGet(req.body.data)
    .then((response) => {
      res.send(response);
    })
    .catch((e) => {
      res.status(500, {
        error: e,
      });
    });
});
