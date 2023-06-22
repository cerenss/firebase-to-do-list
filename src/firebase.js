// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACJGI_4nBL_PmYWmQ-Odea6KG8E_LH_KU",
  authDomain: "todo-app-ceren.firebaseapp.com",
  projectId: "todo-app-ceren",
  storageBucket: "todo-app-ceren.appspot.com",
  messagingSenderId: "19035084260",
  appId: "1:19035084260:web:156c28fd1dfcd7a7c023f1",
  measurementId: "G-HH88Q4XLNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);