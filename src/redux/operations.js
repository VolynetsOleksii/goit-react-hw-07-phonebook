import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from 'services/contactsApi';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await fetchContacts();
      return contacts.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const contacts = await addContacts(contact);
      return contacts.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const contacts = await deleteContacts(id);
      return contacts.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
