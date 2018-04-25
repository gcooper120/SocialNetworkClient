import axios from 'axios';

export {getProfilePicture};

function getProfilePicture() {
	const url = '/api/profile';
	return axios.get(url).then(response => response.data);
}