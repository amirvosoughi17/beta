import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    isAuthenticated: false,
    users: [],
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated = Boolean(action.payload);
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUserInfo, setUsers } = userSlice.actions;
export const selectUserInfo = (state) => state.user.userInfo;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;