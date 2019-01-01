const path = require('path'),
	express = require('express'),
  port = process.env.PORT || 8081;

const app = express();

app.set('port', port);
app.use(express.static(path.join(__dirname, '/build')));

app.listen(app.get('port'), function() {
	console.log('Express server listening on port', app.get('port'));
});