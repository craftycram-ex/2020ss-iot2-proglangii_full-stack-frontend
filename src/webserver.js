const express = require('express');
const path = require('path');

const app = express();

// http://localhost:8080
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.listen(8080);
