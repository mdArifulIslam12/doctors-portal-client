// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.RACT_APP_API_KEY,
  // authDomain: process.env.RACT_APP_AUTH_DOMAIN,
  // projectId: process.env.RACT_APP_PROJECT_ID,
  // storageBucket: process.env.RACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.RACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.RACT_APP_APP_ID,
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