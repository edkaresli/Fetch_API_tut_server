const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// app.use(express.static('public'));

app.get('/', (req, res) => {

  console.log("A GET request was received.");
  res.json({ "msg" : "All is working!" });

});

const port = 5000;

app.listen(port, '127.0.0.1', () => {

  console.log(`Server is listening on port ${port}...`);

});