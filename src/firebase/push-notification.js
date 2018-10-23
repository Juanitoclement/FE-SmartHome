import firebase from "firebase";
import store from "../redux/store/configureStore";
import { notificationToken } from "../redux/actions/firebaseAction";

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "197890695099"
  });
};
// export const config = {
//   apiKey: "AIzaSyBMWFyJuO6BA1xVHoWtIPjB0VAYoxZEM40",
//   authDomain: "homie-backend.firebaseapp.com",
//   databaseURL: "https://homie-backend.firebaseio.com",
//   projectId: "homie-backend",
//   storageBucket: "homie-backend.appspot.com",
//   messagingSenderId: "197890695099"
// };

// export function initializePush() {
//   const messaging = firebase.messaging();
//   messaging
//     .requestPermission()
//     .then(() => {
//       console.log("Have Permission");
//       return messaging.getToken();
//     })
//     .then(token => {
//       console.log("FCM Token:", token);
//       store.store.dispatch(notificationToken(token));
//     })
//     .catch(error => {
//       if (error.code === "messaging/permission-blocked") {
//         console.log("Please Unblock Notification Request Manually");
//       } else {
//         console.log("Error Occurred", error);
//       }
//     });
//   messaging.onMessage(function(payload) {
//     console.log("onMessage: ", payload.notification);
//     alert(payload.notification.title);
//   });
// }

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("token do usuário:", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
