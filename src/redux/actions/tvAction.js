import axios from "axios/index";
import { TV_ON, TV_OFF, GET_TV, GET_TV_STATUS } from "./actionType";

const apiUrl = "http://10.25.150.228:8000/homie/device/";
const tvUrl = "http://10.25.150.228:8000/homie/TV/";

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

function turnOnTv(id) {
  return {
    type: TV_ON,
    tvOnPayload: new Promise(resolve => {
      axios
        .get(apiUrl + "turn-on-tv", {
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

function turnOffTv(id) {
  return {
    type: TV_OFF,
    tvOffPayload: new Promise(resolve => {
      axios
        .get(apiUrl + "turn-off-tv", {
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

function upChannel() {}

function downChannel() {}

function upVolume() {}

function downVolume() {}

function getTv() {
  return {
    type: GET_TV,
    getTvPayload: new Promise(resolve => {
      axios.get(apiUrl + "get-all-users-tv", httpOptions).then(response => {
        console.log(response);
        return resolve(response);
      });
    })
  };
}

function getTvStatus(id) {
  return {
    type: GET_TV_STATUS,
    getAcStatus: new Promise(resolve => {
      axios
        .get(apiUrl + "get-tv-by-device-id", {
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
  turnOnTv,
  turnOffTv,
  upChannel,
  downChannel,
  upVolume,
  downVolume,
  getTv,
  getTvStatus
};
