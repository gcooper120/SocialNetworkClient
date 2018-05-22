import axios from 'axios';

export {getProfileData};

function getProfileData() {
	const url = '/api/profileData';
	return axios.get(url).then(response => response.data);
}