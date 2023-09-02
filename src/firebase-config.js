import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCAP321iMjtuZx35DM4WSJSqCCY_QW54wA",
  authDomain: "pomodoro-db003.firebaseapp.com",
  projectId: "pomodoro-db003",
  storageBucket: "pomodoro-db003.appspot.com",
  messagingSenderId: "65786060814",
  appId: "1:65786060814:web:3e6e012112cf5d94425c5f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();