import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  Name: '',
};

const counterSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    actualizarNombre(state, action) {
      state.Name = action.payload;
    },
  },
});
export const { actualizarNombre } = counterSlice.actions;

export default counterSlice.reducer;
