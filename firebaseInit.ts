"use-server";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  //   authDomain: "PROJECT_ID.firebaseapp.com",
  //   // The value of `databaseURL` depends on the location of the database
  //   databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: process.env.PROJECT_ID,
  //   storageBucket: "PROJECT_ID.appspot.com",
  //   messagingSenderId: "SENDER_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db as database };
