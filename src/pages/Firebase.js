// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getFirestore ,doc,deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCazkQu8cJ5h5TJOMnM8F5oivpZgDTB1Us",
  authDomain: "ypench-project.firebaseapp.com",
  databaseURL: "https://ypench-project-default-rtdb.firebaseio.com",
  projectId: "ypench-project",
  storageBucket: "ypench-project.appspot.com",
  messagingSenderId: "388621457323",
  appId: "1:388621457323:web:474fd0a4b224e213aaa4ee",
  measurementId: "G-9052DCP4EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fireDb = getStorage(app);