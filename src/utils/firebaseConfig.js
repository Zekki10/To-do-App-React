// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLM1AhmpOJVJqkyeCVOYbAjdv4deYorsM",
    authDomain: "to-do-list-7c05e.firebaseapp.com",
    // databaseURL: "https://to-do-list-7c05e-default-rtdb.firebaseio.com",
    projectId: "to-do-list-7c05e",
    storageBucket: "to-do-list-7c05e.appspot.com",
    messagingSenderId: "28614857187",
    appId: "1:28614857187:web:d32490f247d64a910050d6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db