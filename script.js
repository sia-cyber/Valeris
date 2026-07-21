<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);
</script>