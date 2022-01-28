import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYnLnJtGXBX79kViXOzr-iihVDmMae0CQ",
  authDomain: "blog-419d6.firebaseapp.com",
  projectId: "blog-419d6",
  storageBucket: "blog-419d6.appspot.com",
  messagingSenderId: "370724446179",
  appId: "1:370724446179:web:a098f2c0d6eb01adc9cad6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();