import axios from 'axios'

const api = axios.create({
  baseURL: 'https://conttak.herokuapp.com'
});


export default api;