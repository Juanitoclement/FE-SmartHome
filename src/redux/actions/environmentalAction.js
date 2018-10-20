import axios from "axios/index";
import { GET_TEMPERATURE, GET_HUMIDITY } from "./actionType";

const apiUrl = "http://192.168.30.119:8000/homie/environment/data/";

function getTemperatureData() {
  return {
    type: GET_TEMPERATURE,
    getTemperaturePayload: new Promise(resolve => {
      axios
        .get(apiUrl + "get-temperature-data", {
          headers: {
            "Content-type": "application/form-data",
            mandatory: localStorage.getItem("token")
          },
          params: {
            accessToken: localStorage.getItem("token"),
            channelId: "WEB"
          }
        })
        .then(response => {
          console.log(response);
          return resolve(response);
        });
    })
  };
}

function getHumidityData() {
  return {
    type: GET_HUMIDITY,
    getHumidityPayload: new Promise(resolve => {
      axios
        .get(apiUrl + "get-humidity-data", {
          headers: {
            "Content-type": "application/form-data",
            mandatory: localStorage.getItem("token")
          },
          params: {
            accessToken: localStorage.getItem("token"),
            channelId: "WEB"
          }
        })
        .then(response => {
          console.log(response);
          return resolve(response);
        });
    })
  };
}

export { getTemperatureData, getHumidityData };