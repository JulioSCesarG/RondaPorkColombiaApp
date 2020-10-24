import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBt96uwHTviJf7C9AD3FuiErlcD96wLyKA",
  authDomain: "ronda-porkcolombia.firebaseapp.com",
  databaseURL: "https://ronda-porkcolombia.firebaseio.com",
  projectId: "ronda-porkcolombia",
  storageBucket: "ronda-porkcolombia.appspot.com",
  messagingSenderId: "1081419719665",
  appId: "1:1081419719665:web:d5ca8969d5b126e72d1a50",
  measurementId: "G-P8X93Z5XET"
  };

  

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();


