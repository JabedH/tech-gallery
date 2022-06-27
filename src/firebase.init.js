// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwCNzSSaaTbrL-F9vg2vm82pfbN0n_OkA",
  authDomain: "tech-gallery-ba616.firebaseapp.com",
  projectId: "tech-gallery-ba616",
  storageBucket: "tech-gallery-ba616.appspot.com",
  messagingSenderId: "58975865902",
  appId: "1:58975865902:web:1740be3fabdb06923963bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
