import axios from 'axios';

const baseURL = 'https://gaminhoodbackend.onrender.com';

const getData = () =>
  axios({
    method: 'GET',
    url: '/getData',
    baseURL: baseURL,
  });

const sendEmail = async data =>
  axios({
    data,
    method: 'POST',
    url: '/sendEmail',
    baseURL: baseURL,
  });
export {getData, sendEmail};
