import axios from 'axios';
const API_URL = process.env.API_URL;
const API_TIMEOUT = parseInt(process.env.API_TIMEOUT);

export default axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-CSRF-Token',
});
