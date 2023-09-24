// Import Firebase if you used npm to install it
// import firebase from "firebase/app";
// import "firebase/database";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to your database
const database = firebase.database();
   

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD-doFbKvWu0sMhI3PzWHTWiErizEz3Hc",
  authDomain: "silent-star-312702.firebaseapp.com",
  projectId: "silent-star-312702",
  storageBucket: "silent-star-312702.appspot.com",
  messagingSenderId: "826384579733",
  appId: "1:826384579733:web:62a4a4b4e5b847d1a82f9c",
  measurementId: "G-325ZR3H84W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);