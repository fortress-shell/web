import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_URL,
  timeout: process.env.API_TIMEOUT,
  withCredentials: true,
  xsrfCookieName: '_csrf_token',
  xsrfHeaderName: 'X-CSRF-Token',
  headers: {
    'Content-Type': 'application/json',
  },
});
