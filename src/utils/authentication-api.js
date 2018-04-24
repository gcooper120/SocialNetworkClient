import axios from 'axios';

export {login};

function login(username, password) {
	const url = '/api/test';
	var data = {
		username: username,
		password: password
	}
	console.log(data)
	return axios.post(url, data).then(response => response.data);
}