import axios from 'axios';

const makeHttp = async ({method, data, endpoint, headers}) => {
  try {
    const request = await axios({
      method,
      data,
      headers,
      baseURL: 'http://192.168.0.134:5000',
      url: endpoint,
    });
    return request.data;
  } catch (err) {
    console.log({err, method, data, endpoint, headers});
    throw err;
  }
};

export default makeHttp;
