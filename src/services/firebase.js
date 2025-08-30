// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import {
  getTodoLocalStorage,
  getUserLocalStorage,
} from "../db/localStorage.db";
import { toast } from "react-toastify";

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
  const res = await signInWithPopup(auth, googleAuthProvider);
  const user = res.user;
  return user;
};

const addTodoToFirebase = async (data) => {
  console.log("addTodoToFirebase called with data:", data);

  const user = getUserLocalStorage();
  console.log("User from localStorage:", user);

  if (user) {
    try {
      console.log("Setting document in Firebase for user:", user.uid);
      const res = await setDoc(doc(db, "todo", user?.uid), { todos: data });
      console.log("Firebase setDoc result:", res);
      return res;
    } catch (error) {
      console.error("Error in addTodoToFirebase:", error);
      throw error;
    }
  } else {
    console.log("No user found in localStorage");
    return null;
  }
};

const getTodoFirebase = ({ dispatch }) => {
  const user = getUserLocalStorage();

  const docRef = doc(db, "todo", user?.uid);
  onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      if (docSnap.data()?.todos?.length) {
        dispatch({
          type: "UPDATE_TASK_FIREBASE",
          payload: docSnap.data()?.todos ? docSnap.data().todos : [],
        });
        console.log("Real-time data:", docSnap.data().todos);
      }

      // dispatch
    } else {
      console.log("No such document!");
    }
  });
};

const storeLocalDataForNewUser = async () => {
  const user = getUserLocalStorage();
  console.log("storeLocalDataForNewUser called with user:", user);

  if (!user) {
    console.log("No user found in localStorage");
    return;
  }

  const docRef = doc(db, "todo", user?.uid);
  console.log("Checking Firebase document for user:", user.uid);

  // Use getDoc instead of onSnapshot for one-time check
  try {
    const docSnap = await getDoc(docRef);
    console.log("Firebase document exists:", docSnap.exists());

    if (docSnap.exists()) {
      // User already has data in Firebase
      const firebaseTodos = docSnap.data()?.todos || [];
      console.log("User already has todos in Firebase:", firebaseTodos.length);

      if (firebaseTodos.length > 0) {
        console.log("Firebase todos:", firebaseTodos);
      }
    } else {
      // New user - check if there are todos in localStorage
      console.log("No Firebase document found for new user");

      const localTodos = getTodoLocalStorage();
      console.log("LocalStorage todos:", localTodos);

      // Check if there are todos in localStorage (either from previous session or current)
      if (localTodos && localTodos.todos && localTodos.todos.length > 0) {
        console.log("Found todos in localStorage, backing up to Firebase");
        console.log("Todos to backup:", localTodos.todos);

        try {
          const result = await addTodoToFirebase(localTodos.todos);
          console.log("Backup result:", result);

          if (result) {
            toast.success("Backup added successfully! 📱");
            console.log("Data backup successful");
          } else {
            toast.error("Backup failed - no result returned");
          }
        } catch (error) {
          console.error("Failed to backup data:", error);
          toast.error("Failed to backup data");
        }
      } else {
        console.log("No todos found in localStorage or empty todos array");
        console.log("localTodos:", localTodos);
      }
    }
  } catch (error) {
    console.error("Error checking Firebase document:", error);
    toast.error("Error checking Firebase document");
  }
};

export {
  auth,
  signInWithGoogle,
  db,
  addTodoToFirebase,
  getTodoFirebase,
  storeLocalDataForNewUser,
};
