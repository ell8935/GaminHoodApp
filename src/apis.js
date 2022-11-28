import axios from 'axios';

const getData = () =>
  axios({
    method: 'GET',
    url: '/getData',
    baseURL: 'http://localhost:5000',
  });

export {getData};
