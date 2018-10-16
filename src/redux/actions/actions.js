import axios from "axios/index";
export const NEW_TODO = "NEW_TODO";
export const OLD_TODO = "OLD_TODO";
export const DO_LOGIN = "DO_LOGIN";
export const DO_VERIFY = "DO_VERIFY";
export const DO_LOGOUT = "DO_LOGOUT";
export const GET_AC = "GET_AC";
export const GET_AC_STATUS = "GET_AC_STATUS";
export const NEW_TODO_SUCCESS = "NEW_TODO_SUCCESS";
export const NEW_TODO_FAILURE = "NEW_TODO_FAILURE";
export const TEST_API = "TEST_API";

const apiUrl = "http://10.25.150.228:8000/homie/homie/device/turn-on-ac";
const loginUrl =
  "http://10.25.150.228:8000/homie/homie/user/verify-credentials";
const verifyUrl = "http://10.25.150.228:8000/homie/homie/user/sign-in";
const apiUrlTest = "http://10.25.150.228:5000/temp";
const getAcUrl =
  "http://10.25.150.228:8000/homie/homie/device/get-all-users-ac";
const getAcStatusUrl =
  "http://10.25.150.228:8000/homie/homie/device/get-ac-by-device-id";
const httpOptions = {
  headers: {
    "Content-type": "application/form-data",
    mandatory: localStorage.getItem("token")
  },
  params: {
    deviceID: "5bc41d6a2b7302a70769955a",
    accessToken: localStorage.getItem("token")
  }
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
  console.log(httpOptions);
  return {
    type: OLD_TODO,
    oldPayload: new Promise(resolve => {
      axios.get(apiUrl, httpOptions).then(response => {
        console.log(response);
        return resolve(response);
      });
    })
  };
}
function doLogin(data) {
  var bodyFormData = new FormData();
  bodyFormData.set("email", data.email);
  bodyFormData.set("password", data.password);

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
          // handle error
          // localStorage.removeItem("SUCCESS_CODE");
          // localStorage.setItem("SUCCESS_CODE", "ERROR");
          // console.log(res);
        });
    })
  };
}

function doVerify(data) {
  var bodyFormData = new FormData();
  bodyFormData.set("email", data.email);
  bodyFormData.set("password", data.password);
  bodyFormData.set("code", data.code);

  return {
    type: DO_VERIFY,
    verifyPayload: new Promise(resolve => {
      axios({
        method: "post",
        url: verifyUrl,
        data: bodyFormData,
        config: httpOptions
      })
        .then(response => {
          console.log(response.data.data.token);
          localStorage.setItem("token", response.data.data.token);
          resolve(response.data.token);
        })
        .catch(res => {
          alert("WRONG!!!");
          console.log(res);
        });
    })
  };
}

function doLogout() {
  return {
    type: DO_LOGOUT,
    logoutPayload: localStorage.removeItem("token")
  };
}

function getAc() {
  return {
    type: GET_AC,
    getacPayload: new Promise(resolve => {
      axios.get(getAcUrl, httpOptions).then(response => {
        console.log(response);
        return resolve(response);
      });
    })
  };
}

function getAcStatus(id) {
  return {
    type: GET_AC_STATUS,
    getAcStatus: new Promise(resolve => {
      axios
        .get(getAcStatusUrl, {
          headers: {
            "Content-type": "application/form-data",
            mandatory: localStorage.getItem("token")
          },
          params: {
            deviceID: id,
            accessToken: localStorage.getItem("token")
          }
        })
        .then(response => {
          console.log(response);
          return resolve(response);
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
  doVerify,
  doLogout,
  getAc,
  getAcStatus,
  newTodoFailure,
  newTodoSuccess,
  testingApi
};
