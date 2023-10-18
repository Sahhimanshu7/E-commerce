// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcn3BeVFIi21zuRoGwek-Uj90mIz5q548",
  authDomain: "e-c999.firebaseapp.com",
  projectId: "e-c999",
  storageBucket: "e-c999.appspot.com",
  messagingSenderId: "793313012133",
  appId: "1:793313012133:web:958552fb09fdab4223a04c",
  measurementId: "G-4049KZC8NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
