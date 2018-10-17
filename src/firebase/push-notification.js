import firebase from "firebase";
export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "your messagingSenderId"
  });
};
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
// export const inicializarFirebase = () => {
//   firebase.initializeApp({
//     messagingSenderId: 'your messagingSenderId'
//   });
//   navigator.serviceWorker
//     .register('/my-sw.js')
//     .then((registration) => {
//       firebase.messaging().useServiceWorker(registration);
//     });
// }
