import firebase from "firebase";
import { Actions } from "jumpstate";
function initializeFirebase() {
  // Initialize Firebase
  const firebaseConfig = {
  apiKey: "AIzaSyAV7iQz5R9jSrZMKZEHZ5TPF0vFIm9oWCw",
  authDomain: "estream-5a18e.firebaseapp.com",
  databaseURL: "https://estream-5a18e.firebaseio.com",
  projectId: "estream-5a18e",
  storageBucket: "estream-5a18e.appspot.com",
  messagingSenderId: "1081268777030",
  appId: "1:1081268777030:web:f7a3067b648859b41a1a47",
  measurementId: "G-ZN7VMWGEVY"
};
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (errors) {
    if (__DEV__) console.log(errors);
  }
}

export { initializeFirebase };
