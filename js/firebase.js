// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpdYkAmjurlaBOlIkTwP5_NHvwUOv_qtU",
  authDomain: "valeris-1f712.firebaseapp.com",
  projectId: "valeris-1f712",
  storageBucket: "valeris-1f712.firebasestorage.app",
  messagingSenderId: "348487851411",
  appId: "1:348487851411:web:38fd05da7caf235f9cdc66",
  measurementId: "G-0X9HGPJ9Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);

// Export them
export { auth, db };