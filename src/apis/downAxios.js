import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:5000/',
  baseURL: 'https://bass-ytd.herokuapp.com/',
  timeout: 25000,
  headers: { 'X-Custom-Header': 'foobar' }
});