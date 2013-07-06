var express = require('express');

var app = express.createServer(express.logger());

var content = "hello"

app.get('/', function(request, response) {
  response.send(content);
});

Var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
