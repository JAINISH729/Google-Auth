import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW9nwLGqkMFVz_khWadIm86kHGKpx7RwI",
  authDomain: "auth-9d3e1.firebaseapp.com",
  projectId: "auth-9d3e1",
  storageBucket: "auth-9d3e1.firebasestorage.app",
  messagingSenderId: "27891121537",
  appId: "1:27891121537:web:23a3468bde142914827c80" 
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();