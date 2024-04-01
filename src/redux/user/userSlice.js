import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    isAuthenticated: false,
    users: [],
    order: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated = Boolean(action.payload);
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setUserInfo, setUsers, setOrder } = userSlice.actions;

export const selectUserInfo = (state) => state.user.userInfo;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUsers = (state) => state.user.users;
export const selectOrder = (state) => state.user.order;

export default userSlice.reducer;
