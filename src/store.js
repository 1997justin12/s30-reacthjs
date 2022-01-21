import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userSlice } from './_redux/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
