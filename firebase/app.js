
// console.log("firebase");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create a document
const createProduct = async (product) => {
    try {
        const productCollection = collection(db, "products");
        const newProductRef = await addDoc(productCollection, product);
        console.log("Document created with ID: ", newProductRef.id);
    } catch (error) {
        console.error("Error creating document: ", error);
    }
};
// var p = {
//     title:"watch",
//     image:"abc",
//     price: 350 ,
//     description: "abc",
//     rating: 1.5
// }
// createProduct(p);

// Delete a document
const deleteUser = async (productId) => {
    try {
        const productDocRef = doc(db, "products", productId);
        await deleteDoc(productDocRef);
        console.log("Document deleted successfully!");
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
};

// Read all documents
const readProducts = async () => {
    try {
        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, " => ", doc.data());
        // });
        console.log(querySnapshot);
    } catch (error) {
        console.error("Error reading documents: ", error);
    }
};

// Read a specific document
const readProduct = async (productId) => {
    try {
        const productDocRef = doc(db, "products", productId);
        const productDocSnapshot = await getDoc(productDocRef);

        if (productDocSnapshot.exists()) {
            console.log(productDocSnapshot.id, " => ", productDocSnapshot.data());
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error reading document: ", error);
    }
};

// Update a document
const updateProduct = async (productId, updatedProduct) => {
    try {
        const productDocRef = doc(db, "products", productId);
        await updateDoc(productDocRef, updatedProduct);
        console.log("Document updated successfully!");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
};


//   function calling

// createProduct({
//         title: "nokia",
//         image: "abc",
//         price: 3500,
//         description: "abc",
//         rating: 3.5
//     });

readProducts();