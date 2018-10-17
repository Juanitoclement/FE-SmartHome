import axios from "axios/index";

export const NEW_TODO = "NEW_TODO";
export const OLD_TODO = "OLD_TODO";
export const DO_LOGIN = "DO_LOGIN";
export const DO_VERIFY = "DO_VERIFY";
export const DO_LOGOUT = "DO_LOGOUT";
export const GET_AC = "GET_AC";
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

import {
  AC_ON,
  AC_OFF,
  GET_AC,
  GET_AC_STATUS,
  OLD_TODO
} from "./actionType";

const deviceUrl = "http://10.25.150.228:8000/homie/device/";
const apiUrl = "http://10.25.150.228:8000/homie/device/turn-on-ac";
const getAcUrl = "http://10.25.150.228:8000/homie/device/get-all-users-ac";
const getAcStatusUrl =
  "http://10.25.150.228:8000/homie/device/get-ac-by-device-id";
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

function turnOnAc() {
  return {
    type: AC_ON,
    payload: new Promise(resolve => {
      axios.get(deviceUrl).then(response => resolve(response.data));
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
//
// function newTodoSuccess(data) {
//   return {
//     type: NEW_TODO_SUCCESS,
//     payload: data
//   };
// }
//
// function newTodoFailure(error) {
//   return {
//     type: NEW_TODO_FAILURE,
//     payload: error
//   };
// }
export {
  turnOnAc,
  oldTodo,
  getAc,
  getAcStatus
  // newTodoFailure,
  // newTodoSuccess
};
