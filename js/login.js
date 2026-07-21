import { auth, db } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    try {

        // Login using Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        // Get user information from Firestore
        const userDoc = await getDoc(doc(db, "students", user.uid));

        if (!userDoc.exists()) {
            alert("Student profile not found.");
            return;
        }

        const student = userDoc.data();

        alert(`Welcome, ${student.fullname}!`);

        // We'll replace this later with the dashboard
        window.location.href = "student-dashboard.html";

    } catch (error) {

        alert(error.message);

    }

});