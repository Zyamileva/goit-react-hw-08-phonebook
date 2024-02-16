import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signupRequest = async body => {
  console.log('first', body);
  const { data } = await authInstance.post('/users/signup', body);
  console.log('data', data);
};
