import axios from 'axios';

export const Request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,

  headers: {
    Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
  },
}); 