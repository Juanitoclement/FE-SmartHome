import axios from "axios/index";
export const NEW_TODO = "NEW_TODO";
export const OLD_TODO = "OLD_TODO";
export const NEW_TODO_SUCCESS = "NEW_TODO_SUCCESS";
export const NEW_TODO_FAILURE = "NEW_TODO_FAILURE";

export const TEST_API = "TEST_API";

const apiUrl = "http://flaskapi.danieljua.pitunnel.com/AC/";
const apiUrlTest = "http://192.168.1.118:5000/temp";

function newTodo() {
  return {
    type: NEW_TODO,
    payload: new Promise(resolve => {
      axios
        .get(apiUrl + "turn-off/1/")
        .then(response => resolve(response.data));
    })
  };
}
function oldTodo() {
  return {
    type: OLD_TODO,
    oldPayload: new Promise(resolve => {
      axios.get(apiUrl + "turn-on/1/").then(response => {
        console.log(response.data.status);
        return resolve(response.data.status);
      });
    })
  };
}

function testingApi() {
  return {
    type: TEST_API,
    testPayload: new Promise(resolve => {
      axios.post(apiUrlTest).then(response => resolve(response.data));
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
export { newTodo, oldTodo, newTodoFailure, newTodoSuccess, testingApi };
