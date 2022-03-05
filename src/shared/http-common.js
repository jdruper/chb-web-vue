import axios from 'axios';
export default axios.create({
  baseURL: '/api?rest_route=',
  headers: {
    'Content-type': 'application/json',
  },
});
