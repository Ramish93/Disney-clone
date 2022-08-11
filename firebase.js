import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAt_KuGVc_7eHpbGJFb3zOyjTuGLrNR-g",
  authDomain: "disney-clone-761cc.firebaseapp.com",
  projectId: "disney-clone-761cc",
  storageBucket: "disney-clone-761cc.appspot.com",
  messagingSenderId: "47371950045",
  appId: "1:47371950045:web:fefa821401236380828834",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
