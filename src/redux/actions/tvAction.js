import axios from "axios/index";
import {
  TV_ON,
  TV_OFF,
  GET_TV,
  GET_TV_STATUS,
  UP_CHANNEL,
  DOWN_CHANNEL,
  UP_VOLUME,
  DOWN_VOLUME,
  MUTE_VOLUME
} from "./actionType";

const apiUrl = "http://10.25.150.13:8000/homie/device/";
const tvUrl = "http://10.25.150.13:8000/homie/TV/";

const httpOptions = {
  headers: {
    "Content-type": "application/form-data",
    mandatory: localStorage.getItem("token")
  },
  params: {
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

function upChannel(id) {
  return {
    type: UP_CHANNEL,
    upChannelPayload: new Promise(resolve => {
      axios
        .get(tvUrl + "program-up", {
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

function downChannel(id) {
  return {
    type: DOWN_CHANNEL,
    downChannelPayload: new Promise(resolve => {
      axios
        .get(tvUrl + "program-down", {
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

function upVolume(id) {
  return {
    type: UP_VOLUME,
    upVolumePayload: new Promise(resolve => {
      axios
        .get(tvUrl + "volume-up", {
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

function downVolume(id) {
  return {
    type: DOWN_VOLUME,
    downVolumePayload: new Promise(resolve => {
      axios
        .get(tvUrl + "volume-down", {
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

function muteVolume(id) {
  return {
    type: MUTE_VOLUME,
    muteVolumePayload: new Promise(resolve => {
      axios
        .get(tvUrl + "mute", {
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
    getTvStatus: new Promise(resolve => {
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
  muteVolume,
  getTv,
  getTvStatus
};
