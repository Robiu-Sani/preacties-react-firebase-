// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb56D2Ll5R8S76BPLIBpg_5aeLT3eAT_c",
  authDomain: "practies-fc7b4.firebaseapp.com",
  projectId: "practies-fc7b4",
  storageBucket: "practies-fc7b4.appspot.com",
  messagingSenderId: "171444897474",
  appId: "1:171444897474:web:9ab61b986d3eb9df651d5b",
  measurementId: "G-1V2PJ2112Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;