import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", async () => {

    const fullname = document.getElementById("fullname").value.trim();
    const studentNumber = document.getElementById("studentNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!fullname || !studentNumber || !email || !password) {
        alert("Please complete all fields.");
        return;
    }

    try {

        // Check if the student number exists
        const studentRef = doc(db, "authorized_students", studentNumber);

        const studentSnap = await getDoc(studentRef);

        if (!studentSnap.exists()) {
            alert("Student Number not found.");
            return;
        }

        // Create Firebase Authentication account
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        const studentData = studentSnap.data();

        // Save student profile
        await setDoc(doc(db, "students", user.uid), {

            fullname: fullname,
            studentNumber: studentNumber,
            email: email,
            course: studentData.course,
            year: studentData.year,
            section: studentData.section,
            role: "student"

        });

        alert("Registration successful!");

        window.location.href = "login.html";

    }

    catch (error) {

        alert(error.message);

    }

});