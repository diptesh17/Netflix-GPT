// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-B3t-k5cROIr-VPLoE5_p0pxJZEgCdT0",
  authDomain: "netflix-gpt-1f7ae.firebaseapp.com",
  projectId: "netflix-gpt-1f7ae",
  storageBucket: "netflix-gpt-1f7ae.appspot.com",
  messagingSenderId: "91505212450",
  appId: "1:91505212450:web:3bfa27cba5d24f203f5e7b",
  measurementId: "G-1LHEVKJ4Z9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Repetative task
export const auth = getAuth();
