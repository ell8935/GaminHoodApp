import axios from 'axios';

const getData = () =>
  axios({
    method: 'GET',
    url: '/getData',
    baseURL: 'http://localhost:5000',
  });

const sendEmail = async data =>
  axios({
    data,
    method: 'POST',
    url: '/sendEmail',
    baseURL: 'http://localhost:5000',
  });
export {getData, sendEmail};
