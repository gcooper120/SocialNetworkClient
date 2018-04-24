import axios from 'axios';

export {getFoodData, getCelebrityData, getData};

function getFoodData() {
  const url = '/api/jokes/food';
  return axios.get(url).then(response => response.data);
}

function getCelebrityData() {
  const url = '/api/jokes/celebrity';
  return axios.get(url).then(response => response.data);
}
