// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB07KYER6QnpIiBhPelj_7dq-ZzfBxbd-E",
  authDomain: "coffee-store-e7e3f.firebaseapp.com",
  projectId: "coffee-store-e7e3f",
  storageBucket: "coffee-store-e7e3f.appspot.com",
  messagingSenderId: "156512770935",
  appId: "1:156512770935:web:ccb540af8c0cdf5b8c9f72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
