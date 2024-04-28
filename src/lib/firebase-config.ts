// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX8ONfXCbKRqLxBCI1UcHkua81_tBiauM",
  authDomain: "consultoria-nando-tavares.firebaseapp.com",
  projectId: "consultoria-nando-tavares",
  storageBucket: "consultoria-nando-tavares.appspot.com",
  messagingSenderId: "94564474991",
  appId: "1:94564474991:web:fa1e9c72f21e8d0872ed9a",
  measurementId: "G-39T21Z5FCE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
