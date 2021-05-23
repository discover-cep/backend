import axios from 'axios';

export default axios.create({
  baseURL: ' viacep.com.br/ws/',
  headers: {
    'Content-Type': 'application/json',
  },
});
