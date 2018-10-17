import axios from "axios/index";
import { LAMP_ON, LAMP_OFF, GET_LAMP, GET_LAMP_STATUS } from "./actionType";

const apiUrl = "http://10.25.150.228:8000/homie/device/";

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

function turnOnLamp(id) {
  return {
    type: LAMP_ON,
    lampOnPayload: new Promise(resolve => {
      axios
        .get(apiUrl + "turn-on-lamp", {
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

function turnOffLamp(id) {
  return {
    type: LAMP_OFF,
    lampOffPayload: new Promise(resolve => {
      axios
        .get(apiUrl + "turn-off-lamp", {
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

function getLamp() {
  return {
    type: GET_LAMP,
    getLampPayload: new Promise(resolve => {
      axios.get(apiUrl + "get-all-users-lamp", httpOptions).then(response => {
        console.log(response);
        return resolve(response);
      });
    })
  };
}

function getLampStatus(id) {
  return {
    type: GET_LAMP_STATUS,
    getLampStatus: new Promise(resolve => {
      axios
        .get(apiUrl + "get-lamp-by-device-id", {
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

export {
  turnOnLamp,
  turnOffLamp,
  getLamp,
  getLampStatus
};