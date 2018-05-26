import axios from 'axios';

//API for getting data related to the profile
export {getProfileData, changeName};

//Gets everything necesary to render a profile.
function getProfileData() {
	const url = '/api/profileData';
	return axios.get(url).then(response => response.data);
}

function changeName(newName) {
	const url = 'http://localhost:3001/api/changeName'
	return axios.post(url, newName).then(response => response.data);
}