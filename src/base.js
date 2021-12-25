import { initializeApp, getApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/app"
import "firebase/compat/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB30TjAjzDKgIJy2xGMWFA46n_rQ1St4wU",
  authDomain: "hackaton-watches-beka.firebaseapp.com",
  projectId: "hackaton-watches-beka",
  storageBucket: "hackaton-watches-beka.appspot.com",
  messagingSenderId: "333702426253",
  appId: "1:333702426253:web:ab3425aec8714a1fb87cc4",
};

const app = firebase.initializeApp(firebaseConfig);
const firebaseApp = getApp();
export const storage = getStorage(firebaseApp);
export const auth = getAuth();
export const fireDB = getFirestore(app);
export default app;
