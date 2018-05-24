import axios from 'axios';

//API for authentication actions. 
export {login, isLoggedIn};

//Sends the username and password to the server
function login(data) {
	const url = '/api/login';
	return axios.post(url, data);
}

//Checks that the current user is logged in. Necessary for any protected routes.
function isLoggedIn() {
	return axios.get('/api/isAuth').then(response => {
		if (response.data === "Connected") {
			return true;
		} else {
			return false;
		}
	});
}