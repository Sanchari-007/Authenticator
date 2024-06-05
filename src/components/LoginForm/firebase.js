// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCti3fY2IU6l34A7DPEts2ka0XGMj0C4LI",
  authDomain: "authentication-9f0d0.firebaseapp.com",
  projectId: "authentication-9f0d0",
  storageBucket: "authentication-9f0d0.appspot.com",
  messagingSenderId: "651447355463",
  appId: "1:651447355463:web:9e71c7ebd9c49cad95c962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

