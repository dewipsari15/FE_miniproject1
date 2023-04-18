// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Bl-yQuEJVSxhatiT7P6bOXP9nFbao5o",
  authDomain: "bookstorenode.firebaseapp.com",
  projectId: "bookstorenode",
  storageBucket: "bookstorenode.appspot.com",
  messagingSenderId: "884305435736",
  appId: "1:884305435736:web:91b41a5c86248f3375be2d",
  measurementId: "G-301M2VVKFF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
