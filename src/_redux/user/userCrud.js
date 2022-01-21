import axios from 'axios';
const API_ENDPOINT = 'https://randomuser.me/api';

export const fetchUser = async () => {
  return await axios.get(API_ENDPOINT);
};
