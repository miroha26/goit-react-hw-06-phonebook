import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const phoneBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    phoneBook,
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.phoneBook.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.phoneBook = state.phoneBook.filter(
        contact => contact.id !== payload
      );
    },
  },
});
export const persistedReducer = persistReducer(
  persistConfig,
  ContactSlice.reducer
);
export const { addContact, deleteContact } = ContactSlice.actions;
