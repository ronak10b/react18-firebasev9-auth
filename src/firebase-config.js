// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPCw6gnK-eXerKo4X2KE7rPwtAwJyIlHA",
  authDomain: "annakut-80125.firebaseapp.com",
  projectId: "annakut-80125",
  storageBucket: "annakut-80125.appspot.com",
  messagingSenderId: "826887827898",
  appId: "1:826887827898:web:21dc29a705e328a8c32d83",
  measurementId: "G-5YFRQCG0YW"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
