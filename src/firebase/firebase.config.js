// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsDRVKlyRlhejlaXPqNiZqs-X-VbiS0G8",
  authDomain: "dream-events-7da6a.firebaseapp.com",
  projectId: "dream-events-7da6a",
  storageBucket: "dream-events-7da6a.appspot.com",
  messagingSenderId: "175139694390",
  appId: "1:175139694390:web:c37fbe30b873044ce23597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;