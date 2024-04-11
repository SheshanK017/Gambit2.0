import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDVgwh-I-ssT3TPthGZtwlY-vrRD-4CQbw",
  authDomain: "task-gambit-cd2b0.firebaseapp.com",
  projectId: "task-gambit-cd2b0",
  storageBucket: "task-gambit-cd2b0.appspot.com",
  messagingSenderId: "157371860426",
  appId: "1:157371860426:web:faa97c6c318dffa38abb33",
  measurementId: "G-WGJ34TT6N9",
  databaseURL:"https://task-gambit-cd2b0-default-rtdb.firebaseio.com/",
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);


