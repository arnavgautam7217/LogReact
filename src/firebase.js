// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3x1yurNZg6DgQjC_RraOhPMbfq5iWUiY",
  authDomain: "arnav-2781e.firebaseapp.com",
  projectId: "arnav-2781e",
  storageBucket: "arnav-2781e.firebasestorage.app",
  messagingSenderId: "968224656202",
  appId: "1:968224656202:web:c79b87781ddafe95e30fb3",
  measurementId: "G-XG25FWFJ0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth init
export const auth = getAuth(app);
