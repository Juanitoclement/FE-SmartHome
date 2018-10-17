import axios from "axios/index";
import { TV_ON } from "./actionType";

const apiUrl = "http://10.25.150.228:8000/homie/device/";

const httpOptions = {
  headers: {
    "Content-type": "application/form-data",
    mandatory: localStorage.getItem("token")
  }
};

function turnOnTv() {
  return {
    type: TV_ON,
    tvOnPayload: new Promise(resolve => {
      axios.get(apiUrl + "turn-on-tv", httpOptions).then(response => {
        console.log(response);
        return resolve(response);
      });
    })
  };
}

function turnOffTv() {}

function upChannel() {}

function downChannel() {}

function upVolume() {}

function downVolume() {}

function muteVolume() {}

function getAc() {}

export {};
