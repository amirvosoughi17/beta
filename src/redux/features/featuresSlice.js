import { createSlice } from '@reduxjs/toolkit';

const featuresSlice = createSlice({
  name: 'features',
  initialState: {
    selectedFeatures: [],
    necessaryFeatures: [],
    totalPrice: 0,
    planName: '',
  },
  reducers: {
    setFeatures: (state, action) => {
      state.selectedFeatures = action.payload;
    },
    setNecessaryFeatures: (state, action) => {
      state.necessaryFeatures = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setPlanName: (state, action) => {
      state.planName = action.payload;
    },
  },
});

export const { setFeatures, setNecessaryFeatures, setTotalPrice, setPlanName } = featuresSlice.actions;

export default featuresSlice.reducer;
