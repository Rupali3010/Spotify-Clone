import firebase from "firebase";

// Authentication
import "firebase/auth";
// firestore database
import "firebase/firestore";
// real time database
import "firebase/database";
// storage
import "firebase/storage";
// function
import "firebase/functions";
// hoisting

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH4j9WFaT5hC4mHpBmIYprD7KP-0Shx_8",
  authDomain: "spotify-clone-a52b5.firebaseapp.com",
  projectId: "spotify-clone-a52b5",
  storageBucket: "spotify-clone-a52b5.appspot.com",
  messagingSenderId: "1039872477928",
  appId: "1:1039872477928:web:6212dc854b181bd994175d",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const app = firebase.initializeApp(firebaseConfig);
export default firebase;
