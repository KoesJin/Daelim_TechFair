import axios from 'axios';

const protocol = process.env.REACT_APP_API_PROTOCOL || 'http';
const baseURL = `${protocol}://121.139.20.242:1492/api`;

const api = axios.create({
  baseURL: baseURL,
});

export default api;