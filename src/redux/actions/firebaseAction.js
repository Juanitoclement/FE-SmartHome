import axios from "axios/index";
import { NOTIF_TOKEN } from "./actionType";

const loginUrl = "http://api.myhomie.me:8000/homie/user/";

const httpOptions = {
  headers: {
    "Content-type": "application/form-data"
  }
};
function notificationToken(data) {
  var bodyFormData = new FormData();
  bodyFormData.set("accessToken", localStorage.getItem("token"));
  bodyFormData.set("notificationToken", data);

  return {
    type: NOTIF_TOKEN,
    notifPayload: new Promise(resolve => {
      axios({
        method: "post",
        url: loginUrl + "edit-notification-token",
        data: bodyFormData,
        config: httpOptions
      })
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(res => {
          console.log(res);
        });
    })
  };
}

export { notificationToken };
