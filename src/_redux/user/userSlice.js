import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  actionLoading: false,
  name: null,
  email: '',
  error: null,
};

export const callTypes = {
  action: 'action',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      state.actionLoading = true;
    },
    catchError: (state, action) => {
      state.error = action.payload.error;
      state.actionLoading = false;
    },
    userFetched: (state, action) => {
      const { details = {} } = action.payload;
      const { name = {}, email = '' } = details;
      let completeName = `${name?.title}. ${name?.first} ${name?.last}`;
      state.name = completeName;
      state.email = email;
      localStorage.setItem('name', completeName);
      localStorage.setItem('email', email);
    },
  },
});
