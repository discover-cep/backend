import axios from 'axios';

export default axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  headers: {
    'Content-Type': 'application/json',
  },
});
