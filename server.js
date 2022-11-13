'use strict';

const express = require('express');
const app = express();
const PORT = 5555;
app.use(express.json());

// For Microservice Page
app.get('/', (req, res) => {
	res.json(req.body);
});

app.post('/filter', (req, res) => {
	// with the input of the user name, filter the array and return the related transport
	const surgeon1 = req.body.surgeon[0]
	const surgeonName = surgeon1['name']
	let transport = null
	if (surgeonName === "John"){
		transport = "Triple 7"
	}
	else if (surgeonName === "Mary"){
		transport = "Back and Forth"
	}
	else{
		transport = "Fast and Quick"
	}

	res.json(transport)
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
