import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDx_rPMsEPfqdjAlKlkFR9pS6rm40UtRmw",
  authDomain: "justairforce-d1ace.firebaseapp.com",
  projectId: "justairforce-d1ace",
  storageBucket: "justairforce-d1ace.appspot.com",
  messagingSenderId: "789867725790",
  appId: "1:789867725790:web:2b15ae12e3d20164a4934f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
