// To perform CRUD operations (Create, Read, Update, Delete) on a web application using Firebase with JavaScript SDK version 9.1 (modular syntax), you need to follow these steps:

// Set up Firebase in your web application:

// Create a Firebase project on the Firebase console (https://console.firebase.google.com).
// Enable the Firestore database (or the Realtime Database if you prefer).
// Obtain the Firebase configuration object containing your project credentials (API key, auth domain, etc.) from the Firebase console.
// Include Firebase SDK in your HTML file:

// Add the Firebase SDK script to your HTML file. For Firestore, use:



{/* <script src="https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js"></script> */}

// Initialize Firebase in your JavaScript code:

// Initialize Firebase with your project's configuration using the obtained credentials:


// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_STORAGE_BUCKET>",
  messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
  appId: "<YOUR_APP_ID>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Perform CRUD operations using Firestore:

// To create a document, use the addDoc() function on a collection:


import { collection, addDoc } from "firebase/firestore";

const usersCollection = collection(db, "users");

addDoc(usersCollection, {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
});

// To read data, use the getDocs() function on a collection or getDoc() function on a document:

import { collection, getDocs, doc, getDoc } from "firebase/firestore";

// Read all documents from a collection
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

// Read a specific document
const specificDoc = await getDoc(doc(db, "users", "DOCUMENT_ID"));
if (specificDoc.exists()) {
  console.log(specificDoc.id, " => ", specificDoc.data());
} else {
  console.log("No such document!");
}

// To update a document, use the updateDoc() function on a document:

import { doc, updateDoc } from "firebase/firestore";

const userDocRef = doc(db, "users", "DOCUMENT_ID");

updateDoc(userDocRef, {
  age: 31,
  email: "newemail@example.com"
});

// To delete a document, use the deleteDoc() function on a document:

import { doc, deleteDoc } from "firebase/firestore";

// const userDocRef = doc(db, "users", "DOCUMENT_ID");

deleteDoc(userDocRef);