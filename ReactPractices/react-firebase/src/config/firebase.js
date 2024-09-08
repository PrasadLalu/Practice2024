import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_1XohBpyR91pUKdTT_f1pTla8OCYd4rc",
  authDomain: "react-auth-824.firebaseapp.com",
  projectId: "react-auth-824",
  storageBucket: "react-auth-824.appspot.com",
  messagingSenderId: "728277324255",
  appId: "1:728277324255:web:39a189859729ad8b23b46a",
  measurementId: "G-NTDBKDC6SC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
