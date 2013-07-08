var express = require('express');

var file = "index.html";
var buffer = new Buffer(16);
buffer = fs.readFileSync(file);

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
