import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

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

// Create a document
const createUser = async (user) => {
  try {
    const usersCollection = collection(db, "users");
    const newUserRef = await addDoc(usersCollection, user);
    console.log("Document created with ID: ", newUserRef.id);
  } catch (error) {
    console.error("Error creating document: ", error);
  }
};

// Read all documents
const readUsers = async () => {
  try {
    const usersCollection = collection(db, "users");
    const querySnapshot = await getDocs(usersCollection);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error reading documents: ", error);
  }
};

// Read a specific document
const readUser = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDocSnapshot = await getDoc(userDocRef);
    if (userDocSnapshot.exists()) {
      console.log(userDocSnapshot.id, " => ", userDocSnapshot.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error reading document: ", error);
  }
};

// Update a document
const updateUser = async (userId, updatedUser) => {
  try {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, updatedUser);
    console.log("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

// Delete a document
const deleteUser = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    await deleteDoc(userDocRef);
    console.log("Document deleted successfully!");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

// Usage examples
const user = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
};

// Create a user document
createUser(user);

// Read all user documents
readUsers();

// Read a specific user document
readUser("USER_ID");

// Update a user document
const updatedUser = {
  age: 31,
  email: "newemail@example.com"
};
updateUser("USER_ID", updatedUser);

// Delete a user document
deleteUser("USER_ID");