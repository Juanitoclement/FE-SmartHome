import axios from "axios/index";
export const NEW_TODO = "NEW_TODO";
export const OLD_TODO = "OLD_TODO";
export const DO_LOGIN = "DO_LOGIN";
export const NEW_TODO_SUCCESS = "NEW_TODO_SUCCESS";
export const NEW_TODO_FAILURE = "NEW_TODO_FAILURE";

export const TEST_API = "TEST_API";

// const apiUrl = "http://flaskapi.danieljua.pitunnel.com/AC/";
const apiUrl = "http://10.25.151.186:8000/homie/homie/user/turn-on-ac";
const loginUrl =
  "http://10.25.151.186:8000/homie/homie/user/verify-credentials";
const apiUrlTest = "http://192.168.1.118:5000/temp";

const httpOptions = {
  headers: { "Content-type": "application/form-data" }
};

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
      axios
        .get(apiUrl + "turn-off/1/")
        .then(response => resolve(response.data));
    })
    // fetch(apiUrl + "turn-on/1/")
    // .then(response => response.json())
    // .then(data => console.log(data))
  };
}

function doLogin(data) {
  var bodyFormData = new FormData();
  bodyFormData.set("email", data.email);
  bodyFormData.set("password", data.password);
  console.log("dologin");
  return {
    type: DO_LOGIN,
    loginPayload: new Promise(resolve => {
      axios({
        method: "post",
        url: loginUrl,
        data: bodyFormData,
        config: httpOptions
      })
        // .post(loginUrl, data)
        .then(response => {
          console.log(response.data.code);
          resolve(response.data.code);
        })
        .catch(res => {
          localStorage.setItem("SUCCESS_CODE", "ERROR");
          console.log(localStorage.getItem("SUCCESS_CODE"));
          //handle error
          // localStorage.removeItem("SUCCESS_CODE");
          // localStorage.setItem("SUCCESS_CODE", "ERROR");
          // console.log(res);
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
export {
  newTodo,
  oldTodo,
  doLogin,
  newTodoFailure,
  newTodoSuccess,
  testingApi
};
