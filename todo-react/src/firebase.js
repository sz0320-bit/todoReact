// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import "firebase/firestore"
import "firebase/auth";
import "firebase/functions";
import {getAuth} from "firebase/auth";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBat7dUTJJnGtLpzjPBppovUnG1SVTYd6M",
    authDomain: "react-todo-list-39729.firebaseapp.com",
    projectId: "react-todo-list-39729",
    storageBucket: "react-todo-list-39729.appspot.com",
    messagingSenderId: "827514174107",
    appId: "1:827514174107:web:22694b9183c91317a8a43e",
    measurementId: "G-V9BTNR4023"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;


