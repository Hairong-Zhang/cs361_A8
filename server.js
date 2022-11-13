'use strict';

const express = require('express');
const app = express();
const PORT = 5555;
app.use(express.json());

// For Microservice Page
app.get('/', (req, res) => {
	res.json(req.body);
});

app.get('/filter', (req, res) => {
	// with the input of the user name, filter the array and return the related transport
	const { name } = req.body;
	const filteredSurgeon = surgeons.filter((surgeon) => surgeon.name === name);
	res.json(filteredSurgeon.transport);
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
