import axios from 'axios';
import {API_URL} from '@env';

const baseURL = API_URL;

const getData = () =>
  axios({
    method: 'GET',
    url: '/',
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
