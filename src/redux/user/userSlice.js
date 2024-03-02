import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      userInfo: null,
      isAuthenticated: false,
    },
    reducers: {
      setUserInfo: (state, action) => {
        state.userInfo = action.payload;
        state.isAuthenticated = Boolean(action.payload)
      },
    },
  });
  
  export const { setUserInfo } = userSlice.actions;
  export const selectUserInfo = (state) => state.user.userInfo;
  export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
  
  export default userSlice.reducer;