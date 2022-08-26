import axios from 'axios'
import * as types from './actiontypes'
 
 
export const addNewProject=( params)=>(dispatch)=>{
 console.log(params)
 axios
 .post("http://localhost:8080/task/create", params)
 .then((res) => {
  dispatch({type:types.ADD_NEW_PROJECT,payload:params})
   console.log(res.data);
 }).catch((err)=>{
  console.log(err)
 })


}

export const getTaskProject = () => (dispatch) => {
 

 axios
   .get("http://localhost:8080/task")
   .then((res) => dispatch({type:types.GET_TASK_PROJECT,payload:res.data}))
   .catch((err) => console.log(err));
};


export const editProject = (refNO,UpdatedTask) =>(dispatch)=>{
 // console.log("action",refNO)
 dispatch({type:types.EDIT_PROJECT,payload:{refNO,UpdatedTask}})
}

export const deleteProject = (refNO) =>(dispatch)=>{
 dispatch({type:types.Delete_PROJECT,payload:refNO})
}