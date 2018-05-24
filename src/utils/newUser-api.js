import axios from 'axios';

export {newUser};

function newUser(data) {
	const url = '/api/newUser';
	return axios.post(url, data);
}