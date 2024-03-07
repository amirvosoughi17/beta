import { createSlice } from '@reduxjs/toolkit';

const featuresSlice = createSlice({
  name: 'features',
  initialState: {
    selectedFeatures: [],
    totalPrice: 0,
  },
  reducers: {
    setFeatures: (state, action) => {
      state.selectedFeatures = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { setFeatures, setTotalPrice } = featuresSlice.actions;

export default featuresSlice.reducer;