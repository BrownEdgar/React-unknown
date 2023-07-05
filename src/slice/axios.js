import axios from "axios";

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  params: {
    _limit: 4 
  }
})

export default instance