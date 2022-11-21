// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCguKA6248wInWyd-8opz5taHFYgyQTNZw",
  authDomain: "doctors-portals-6b2f1.firebaseapp.com",
  projectId: "doctors-portals-6b2f1",
  storageBucket: "doctors-portals-6b2f1.appspot.com",
  messagingSenderId: "696663625693",
  appId: "1:696663625693:web:f5d067aa774d0c2da1f034"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth