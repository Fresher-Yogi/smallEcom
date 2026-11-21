import React from "react";
import {useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserAction } from "../api/authAction";

const useAuth = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // registration form
  function regForm(data) {
    console.log(data);
  }

  // login form  
  async function loginForm(data) {
    console.log('loginform data', data);
    try {
        //api call is replaced by --> call outer action function that is loginUserAction 
    dispatch(loginUserAction(data))
    } catch (error) {
        console.log(error);
    }
  }

  return {
    register,
    handleSubmit,
    reset,
    errors,
    regForm,
    loginForm,
  };
};

export default useAuth;
