import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAWfruLFcdfHqqRcOAAjAA12XxYxs_IULs",
    authDomain: "firestore-first-89d19.firebaseapp.com",
    databaseURL: "https://firestore-first-89d19.firebaseio.com",
    projectId: "firestore-first-89d19",
    storageBucket: "firestore-first-89d19.appspot.com",
    messagingSenderId: "128824964930",
    appId: "1:128824964930:web:1409c296511e8882717adb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const storage = firebase.storage()
export const db = firebase.firestore();

