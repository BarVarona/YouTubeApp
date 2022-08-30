import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBig0BzlUU3RaPX-u-UxYyk7klF75Jnwg",
  authDomain: "video-e983f.firebaseapp.com",
  projectId: "video-e983f",
  storageBucket: "video-e983f.appspot.com",
  messagingSenderId: "284249243695",
  appId: "1:284249243695:web:f1c30f614cded2c66dc6da",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
