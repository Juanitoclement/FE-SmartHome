import axios from "axios/index";
export const NEW_TODO = "NEW_TODO";
export const OLD_TODO = "OLD_TODO";
export const NEW_TODO_SUCCESS = "NEW_TODO_SUCCESS";
export const NEW_TODO_FAILURE = "NEW_TODO_FAILURE";

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
function newTodo() {
  return {
    type: NEW_TODO,
    payload: new Promise(resolve => {
      axios.get(apiUrl).then(response => resolve(response.data));
    })
  };
}
function oldTodo() {
  return {
    type: OLD_TODO,
    oldPayload: new Promise(resolve => {
      axios.get(apiUrl).then(response => resolve(response.data));
    })
  };
}

function newTodoSuccess(data) {
  return {
    type: NEW_TODO_SUCCESS,
    payload: data
  };
}

function newTodoFailure(error) {
  return {
    type: NEW_TODO_FAILURE,
    payload: error
  };
}
export { newTodo, oldTodo, newTodoFailure, newTodoSuccess };
