import axios from 'axios';

export {newUser};

function newUser(data) {
	const url = '/api/newUser';
	console.log(data)
	return axios.post(url, data).then(response => response.data);
}