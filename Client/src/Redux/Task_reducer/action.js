import axios from "axios";
import * as types from "./actiontypes";

export const addNewProject = (params) => (dispatch) => {
  console.log(params);
  return axios
    .post(
      "https://timely-tw31.onrender.com/task/create",
      params,
      {
        headers: {
          "Content-Type": "application/json",
          authentication: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.ADD_NEW_PROJECT, payload: params });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTaskProject = () => (dispatch) => {
  axios
    .get("https://timely-tw31.onrender.com/task", {
      headers: {
        "Content-Type": "application/json",
        authentication: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log("getTask", res.data);

      dispatch({ type: types.GET_TASK_PROJECT, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const editProject = (refNO, UpdatedTask, projectId) => (dispatch) => {
  // console.log("action",refNO)
  axios
    .patch(
      `https://timely-tw31.onrender.com/task/edit`,
      UpdatedTask,
      {
        headers: {
          "Content-Type": "application/json",
          authentication: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) =>
      dispatch({ type: types.EDIT_PROJECT, payload: { refNO, UpdatedTask } })
    )
    .catch((err) => console.log(err));
};

export const deleteProject = (refNO) => (dispatch) => {
  axios
    .delete(
      `https://timely-tw31.onrender.com/task/${refNO}/delete`,
      {
        headers: {
          "Content-Type": "application/json",
          authentication: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => dispatch({ type: types.Delete_PROJECT, payload: refNO }))
    .catch((err) => console.log(err));
};
