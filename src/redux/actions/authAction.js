import axios from "axios/index";
import { DO_VERIFY, DO_LOGIN, DO_LOGOUT } from "./actionType";

const loginUrl = "http://10.25.150.228:8000/homie/user/";

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

function doLogin(data) {
  var bodyFormData = new FormData();
  bodyFormData.set("email", data.email);
  bodyFormData.set("password", data.password);

  return {
    type: DO_LOGIN,
    loginPayload: new Promise(resolve => {
      axios({
        method: "post",
        url: loginUrl + "verify-credentials",
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
          console.log(res);
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
        url: loginUrl + "sign-in",
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

export { doLogin, doVerify, doLogout };
