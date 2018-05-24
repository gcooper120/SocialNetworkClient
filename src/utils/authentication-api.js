import axios from 'axios';

export {login, isLoggedIn};

function login(data) {
	const url = '/api/login';
	return axios.post(url, data);
}

function isLoggedIn() {
	return axios.get('/api/isAuth').then(response => {
		if (response.data === "Connected") {
			return true;
		} else {
			return false;
		}
	});
}