import firebase from "firebase/app";
import "firebase/firestore";

/**
 * @global
 * @description firebase initialization config
 * @exports db
 */
var firebaseConfig = {
  apiKey: "AIzaSyC-fjQaq3nNbM3lRXRt0Ub-mKtzKbtVqyM",
  authDomain: "svelte-getitout.firebaseapp.com",
  projectId: "svelte-getitout",
  storageBucket: "svelte-getitout.appspot.com",
  messagingSenderId: "849793042066",
  appId: "1:849793042066:web:77dfaf64b737fffcad884b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database Instance
export const db = firebase.firestore();
