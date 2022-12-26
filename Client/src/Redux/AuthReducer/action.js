import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionType";

import axios from "axios";

export const loginApi = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post("https://timely-tw31.onrender.com/user/login", {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      if (res.data === "Invalid Credentials") {
        return;
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      }
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const handlelogout = (payload) => (dispatch) => {
  dispatch({ type: "LOGOUT", payload });
};
