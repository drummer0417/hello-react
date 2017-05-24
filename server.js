var express = require('express');

// Create our app
var app = express();
var port = 3000;

app.use(express.static('public'));

app.listen(port, function() {
  console.log(`Express server is up on port ${port}`);
});
