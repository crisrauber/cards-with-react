import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cards-with-login-and-auth.herokuapp.com/',
});

export default api;
