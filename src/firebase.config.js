import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6FwosUj2Y7otHMI3FCd9Lw-SyaEC-eeM",
  authDomain: "curso-expo-react.firebaseapp.com",
  projectId: "curso-expo-react",
  storageBucket: "curso-expo-react.appspot.com",
  messagingSenderId: "1097562864287",
  appId: "1:1097562864287:web:013dbefd722f9f575340aa"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
