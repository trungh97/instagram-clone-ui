// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcUBaZZPUtksYXjgoaYGRj5q1YRP1zbaI",
  authDomain: "socialapp-55017.firebaseapp.com",
  databaseURL: "https://socialapp-55017.firebaseio.com",
  projectId: "socialapp-55017",
  storageBucket: "socialapp-55017.appspot.com",
  messagingSenderId: "963257872161",
  appId: "1:963257872161:web:5dbf483c335877df9c5860",
  measurementId: "G-DYKX7D2E9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, firebaseConfig };

export default app;
