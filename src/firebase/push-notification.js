import firebase from "firebase";
import store from "../redux/store/configureStore";
import { notificationToken } from "../redux/actions/firebaseAction";

export const config = {
  apiKey: "AIzaSyBMWFyJuO6BA1xVHoWtIPjB0VAYoxZEM40",
  authDomain: "homie-backend.firebaseapp.com",
  databaseURL: "https://homie-backend.firebaseio.com",
  projectId: "homie-backend",
  storageBucket: "homie-backend.appspot.com",
  messagingSenderId: "197890695099"
};

export function initializePush() {
  const messaging = firebase.messaging();
  if (firebase.messaging.isSupported()) {
    console.log("Supported");
    messaging
      .requestPermission()
      .then(() => {
        console.log("Have Permission");
        return messaging.getToken();
      })
      .then(token => {
        console.log("FCM Token:", token);
        //you probably want to send your new found FCM token to the
        //application server so that they can send any push
        //notification to you.
        store.store.dispatch(notificationToken(token));
      })
      .catch(error => {
        if (error.code === "messaging/permission-blocked") {
          console.log("Please Unblock Notification Request Manually", error);
        } else {
          console.log("Error Occurred", error);
        }
      });
  }
  messaging.onMessage(function(payload) {
    console.log("onMessage: ", payload.notification);
    alert(payload.notification.title);
  });
}
