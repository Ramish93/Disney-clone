import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAt_KuGVc_7eHpbGJFb3zOyjTuGLrNR-g",
  authDomain: "disney-clone-761cc.firebaseapp.com",
  projectId: "disney-clone-761cc",
  storageBucket: "disney-clone-761cc.appspot.com",
  messagingSenderId: "47371950045",
  appId: "1:47371950045:web:fefa821401236380828834",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
