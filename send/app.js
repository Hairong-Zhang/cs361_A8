//create express app
const express = require('express');
const app = express();
app.use(express.json());

// send the local surgeon.json file to the default '/' route
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/surgeon.json');
});

// listen on port 3000
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
