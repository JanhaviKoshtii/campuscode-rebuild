
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC393frVxbINJY1iLoyeKGQkRC0I9TSmXk",
  authDomain: "campuscode-6397c.firebaseapp.com",
  databaseURL:
    "https://campuscode-6397c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "campuscode-6397c",
  storageBucket: "campuscode-6397c.firebasestorage.app",
  messagingSenderId: "303628234888",
  appId: "1:303628234888:web:31555a2789d54c584e2f3d",
};

// Initialize Firebase only once
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
