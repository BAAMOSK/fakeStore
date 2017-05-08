const express = require('express');
const app = express();
const User = require('./models/users');

app.get('/', (req, res) => {
  res.send('This is the root page.');
});

app.listen(3000, () => console.log('server is running on port 3000.'));