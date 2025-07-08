// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLhgc_U9LsekaYVsU5WtIDWlFcTCUxXs",
  authDomain: "mwave-website.firebaseapp.com",
  projectId: "mwave-website",
  storageBucket: "mwave-website.firebasestorage.app",
  messagingSenderId: "906721390486",
  appId: "1:906721390486:web:9b72159ed317b4299bf7b7",
  measurementId: "G-VFNW0HH8W6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
