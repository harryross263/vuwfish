var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));

app.get('/', function(request, response) {
  response.render('index.html');
});

