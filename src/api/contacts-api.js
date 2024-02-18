import authInstance from './auth-api';

export const fetchContactRequest = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const addContactRequest = async newContact => {
  const { data } = await authInstance.post('/contacts', newContact);
  return data;
};

export const deleteContactRequest = async Id => {
  const { data } = await authInstance.delete(`/contacts/${Id}`);
  return data;
};
