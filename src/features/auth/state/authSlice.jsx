import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "../api/authAction";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedInUser: null,
    isAuthenticated: false,
    isLoading: true,
  },
  reducers: {
    addUser: (state, action) => {
      (state.loggedInUser = action.payload),
        (state.isAuthenticated = true),
        (state.isLoading = false)
    },

    removeUser: (state, action) => {
      state.loggedInUser = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.loggedInUser = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(hydrateUserAction.pending, (state, action)=>{
        state.isLoading = true;
      })
      .addCase(hydrateUserAction.fulfilled, (state, action)=>{
        state.loggedInUser = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(hydrateUserAction.rejected, (state, action)=>{
        state.isLoading = false;
      })

  }
  

});

export let { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
