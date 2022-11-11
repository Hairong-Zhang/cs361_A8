//create express app
import express from 'express';
const app = express();
import fetch from 'node-fetch';
app.use(express.json());

//fetch the json file from localhost:3000

const fetchData = async () => {
	const response = await fetch('http://localhost:3000');
	const data = await response.json();
	const surgeonList = data['surgeon'];
	// return the item in the array that has the "transport" key with the value "DHL"
	const item = surgeonList.find((item) => item.name === 'John');
	const transport = item.transport;

	return transport;
};

app.get('/', (req, res) => {
	fetchData().then((data) => {
		res.send(data);
	});
});

// listen on port 3000
app.listen(8000, () => {
	console.log('Server started on port 8000');
});
