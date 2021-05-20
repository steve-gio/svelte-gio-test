import App from './App.svelte';
import { initializeApp } from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDQuVMpHV5k2mJdvYoAnxuQTid8uAJjl0E",
    authDomain: "getitout-task.firebaseapp.com",
    projectId: "getitout-task",
    storageBucket: "getitout-task.appspot.com",
    messagingSenderId: "197713993039",
    appId: "1:197713993039:web:b2a335f221cff640ccf93a",
};
// Global loading of Firestore connection instance
initializeApp(firebaseConfig);

const app = new App({
    target: document.body
});

export default app;