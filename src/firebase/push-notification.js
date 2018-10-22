import * as firebase from "firebase";
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
export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    const token = await messaging.getToken();
    await messaging
      .requestPermission()
      .then(function() {
        console.log("granted");
      })
      .catch(function(err) {
        console.log("error", err);
      });
    getNotif();
    console.log("token:", token);
    store.store.dispatch(notificationToken(token));
    return token;
  } catch (error) {
    console.error(error);
  }
};
export const getNotif = async () => {
  const messaging = firebase.messaging();
  messaging.onMessage(function(payload) {
    console.log("onMessage: ", payload.notification);
    alert(payload.notification.title);
  });
};
