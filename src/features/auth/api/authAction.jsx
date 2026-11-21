import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInterceptor";
import { toast } from "react-toastify";
import { useEffect } from "react";

export let loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      let response = await axiosInstance.post("/auth/login", credentials);
      console.log(response);
      localStorage.setItem("accessToken", response.data.accessToken);
      toast.success("User login successfully.");
      return response.data;
    } catch (error) {
      toast.error("Login Failed !!");
      return thunkAPI.rejectWithValue("login failed!!!!!");
    }
  },
);



export let hydrateUserAction = createAsyncThunk(
  "hydrate",
  async (_, thunkAPI) => {
    let Token = localStorage.getItem("accessToken");
    try {
      let response = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      toast.success("Hydration successful..");

      return response.data;
    } catch (error) {
      toast.error("Hydration Failed..");
      return thunkAPI.rejectWithValue("login Failed..");
    }
  },
);
