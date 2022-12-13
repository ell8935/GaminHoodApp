import axios from 'axios';

const getData = () =>
  axios({
    method: 'GET',
    url: '/getData',
    baseURL: 'https://gaminhoodbackend.onrender.com',
  });

const sendEmail = async data =>
  axios({
    data,
    method: 'POST',
    url: '/sendEmail',
    baseURL: 'https://gaminhoodbackend.onrender.com',
  });
export {getData, sendEmail};
