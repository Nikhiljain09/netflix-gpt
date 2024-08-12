// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkQyx4aEpTHmGfF7Oel1y03svf3woRWTM",
  authDomain: "netflixgpt-e3140.firebaseapp.com",
  projectId: "netflixgpt-e3140",
  storageBucket: "netflixgpt-e3140.appspot.com",
  messagingSenderId: "1079984716018",
  appId: "1:1079984716018:web:723de06552720c08d9786b",
  measurementId: "G-5NB0M9JZSV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
