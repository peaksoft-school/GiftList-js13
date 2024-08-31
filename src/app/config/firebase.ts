import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbkxPkJPkHc3mExd_ESRQJBRUqpaaX1d8",
  authDomain: "giftlist-649f3.firebaseapp.com",
  projectId: "giftlist-649f3",
  storageBucket: "giftlist-649f3.appspot.com",
  messagingSenderId: "595676511133",
  appId: "1:595676511133:web:53d45f141da56a974b0d74",
  measurementId: "G-LK5CD5H512",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
