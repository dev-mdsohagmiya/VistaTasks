// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


// Your web app's Firebase configuration
// Create a .env file to keep your app configurations
// Find an .env.examples file for reference under the project folder.
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_MESSAGING_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore(app);



const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleAuthProvider);
        const user = res.user;
        return user;
    } catch (error) {
        throw (error)
    }
}





// Method to insert todo data for the logged-in user
const insertTodoModel = async (data) => {
    if (!auth.currentUser) {
        throw new Error("User must be logged in to insert data");
    }

    try {
        const userTodoRef = collection(db, `users/${auth.currentUser.uid}/todoLists`);
        const docRef = await addDoc(userTodoRef, {
            ...data,
            userId: auth.currentUser.uid,
            createdAt: new Date().toISOString()
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};

// Method to get all todo data for the logged-in user
const getTodoModel = async () => {
    if (!auth.currentUser) {
        throw new Error("User must be logged in to retrieve data");
    }

    try {
        const userTodoRef = collection(db, `users/${auth.currentUser.uid}/todoLists`);
        const querySnapshot = await getDocs(userTodoRef);
        const todos = [];
        querySnapshot.forEach((doc) => {
            todos.push({
                id: doc.id, // Include document ID
                ...doc.data() // Spread the document data
            });
        });
        console.log("Retrieved todos:", todos);
        return todos;
    } catch (error) {
        console.error("Error retrieving documents: ", error);
        throw error;
    }
};











export { auth, signInWithGoogle, getTodoModel, insertTodoModel };