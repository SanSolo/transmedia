var express = require('express')
var proxy = require('express-http-proxy');

var app = express();
 
app.use('/mailchimp', proxy('https://us15.api.mailchimp.com/3.0/lists/eb7b58de02/members'));

app.use(express.static('src'));

app.use('/node_modules', express.static('node_modules'));

app.get('/*', function(req, res) {
  res.sendFile('src/index.html', { root: __dirname });
});

app.listen(process.env.PORT || 3015, function () {
  console.log('Example app listening on port 3000!')
});