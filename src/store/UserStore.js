import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './UserSlicer';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
