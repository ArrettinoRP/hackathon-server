import axios from 'axios';

export const getRandomUserAccount = async () => {
  const response = await axios.get('https://randomuser.me/api');
  return response.data?.results[0];
};
