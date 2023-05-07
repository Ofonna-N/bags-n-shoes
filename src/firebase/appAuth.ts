import {
  Unsubscribe,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import myApp from "./firebaseApp";
import { UserValidationPromise } from "@/utility/CustomTypes";

console.log("Running Firebase auth");
const appAuth = getAuth(myApp);
// let UserEmail: string | null = "";

// onAuthStateChanged(appAuth, (user) => {
//   //   console.log(user, "testig");
//   if (user) {
//     // console.log(user, "User Exists!");
//     // UserEmail = user.email;
//     console.log("User avalable!");
//   } else {
//     console.log("No user");
//   }
// });

export async function getUserExists(): Promise<UserValidationPromise> {
  return new Promise((resolve, reject) => {
    const unsubscribe = appAuth.onAuthStateChanged((user) => {
      if (user) {
        resolve({ ok: true, unsubscribe });
      } else {
        reject({ ok: false, unsubscribe });
      }
    });
  });
}

export async function SignInWithEmailAndPassword(
  email: string,
  password: string
) {
  try {
    await signInWithEmailAndPassword(appAuth, email, password);
    // const user = userCredential.user;
    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
}

export async function CreateUserWithEmailAndPassword(
  email: string,
  password: string
) {
  try {
    await createUserWithEmailAndPassword(appAuth, email, password);
    // const user = userCredential.user;
    return { ok: true, msg: "success" };
  } catch (error) {
    return { ok: false, msg: (error as Error).message };
  }
}

export async function SignOutUser() {
  try {
    await signOut(appAuth);
    // const user = userCredential.user;
    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
}

export default appAuth;
