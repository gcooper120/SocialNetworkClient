import axios from 'axios';

//API for creating a new user. Sends the data as JSON to the server.
export {newUser};

function newUser(data) {
	const url = '/api/newUser';
	return axios.post(url, data);
}