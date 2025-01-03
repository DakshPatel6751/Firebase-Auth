// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDTGWL_qf4Sh1QtOKZZV-8-DkSAGJr9iGQ",
//   authDomain: "fir-auth-2639f.firebaseapp.com",
//   projectId: "fir-auth-2639f",
//   storageBucket: "fir-auth-2639f.appspot.com",
//   messagingSenderId: "226480333283",
//   appId: "1:226480333283:web:59b8adec9001ab3d6080d6"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
 import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZSoqwRnhfOgEvgP8xO240O3MHbT8QCLw",
  authDomain: "fir-new-6457f.firebaseapp.com",
  projectId: "fir-new-6457f",
  storageBucket: "fir-new-6457f.firebasestorage.app",
  messagingSenderId: "657757656996",
  appId: "1:657757656996:web:e2de0fcc5e28870edb9331",
  measurementId: "G-F4D0YX7WCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();