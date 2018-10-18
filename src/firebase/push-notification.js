import firebase from "firebase";
export const initializeFirebase = () => {
  console.log("sdasdasdadsadsa");

  firebase.initializeApp({
    apiKey: "AIzaSyAeM1YvCtKhi6xqXTUMsZ8HxC-fAgXutBU",
    authDomain: "homie-6702b.firebaseapp.com",
    databaseURL: "https://homie-6702b.firebaseio.com",
    projectId: "homie-6702b",
    storageBucket: "homie-6702b.appspot.com",
    messagingSenderId: "654798426208"
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
