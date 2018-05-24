import axios from 'axios';

//API for getting data related to the profile
export {getProfileData};

//Gets everything necesary to render a profile.
function getProfileData() {
	const url = '/api/profileData';
	return axios.get(url).then(response => response.data);
}