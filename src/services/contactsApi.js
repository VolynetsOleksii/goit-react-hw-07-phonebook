import axios from 'axios';

const BASE_URL = 'https://648c17088620b8bae7ec358d.mockapi.io/';

export const fetchContacts = async () => {
  const { data } = axios.get(`${BASE_URL}/contacts`);

  return data;
};

export const addContacts = async contact => {
  const { data } = axios.post(`${BASE_URL}/contacts`, contact);

  return data;
};

export const deleteContacts = async id => {
  const { data } = axios.delete(`${BASE_URL}/contacts/${id}`);

  return data;
};
