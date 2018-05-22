import axios from 'axios';

export {login};

function login(data) {
	const url = '/api/login';
	return axios.post(url, data).then(response => response.data);
}