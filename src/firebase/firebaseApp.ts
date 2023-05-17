import { initializeApp } from "firebase/app";
import { getApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   appId: process.env.NEXT_PUBLIC_PROJECT_ID,
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINSENDERID,
};
// console.log("initialized Firebase App");
const myApp = () => {
  try {
    console.log("getting old APP...");
    return getApp();
  } catch (err) {
    console.log("new app fb init");
    return initializeApp(firebaseConfig);
  }
};

export default myApp;
