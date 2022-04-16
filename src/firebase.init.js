// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlm6AAVB1gxb2WRGnFrY53WMQegQV5wYQ",
    authDomain: "genius-car-services-abd57.firebaseapp.com",
    projectId: "genius-car-services-abd57",
    storageBucket: "genius-car-services-abd57.appspot.com",
    messagingSenderId: "293220496307",
    appId: "1:293220496307:web:8cd20fca092e60f06311c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;