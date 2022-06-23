// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQH7coEK3sxUICM9ujYkhRhxNkwBIy0jE",
  authDomain: "crud-simples-26c11.firebaseapp.com",
  projectId: "crud-simples-26c11",
  storageBucket: "crud-simples-26c11.appspot.com",
  messagingSenderId: "372143176089",
  appId: "1:372143176089:web:3bc75d38eca309abaa3b08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
