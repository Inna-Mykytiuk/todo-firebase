"use server";

import { initializeApp } from "firebase/app";

import {
  collection,
  getFirestore,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

type Todo = {
  // id: string;
  title: string;
  description: string;
  timestamp: number;
  completed: boolean;
};

function getApp() {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  return new Promise((resolve, reject) => {
    try {
      //Initialize Firebase
      const app = initializeApp(firebaseConfig);
      resolve(app);
    } catch (error) {
      resolve(null);
      console.log(error);
    }
  });
}

export const addToDo = async (formData: FormData, userId?: string) => {
  if (!userId) {
    throw new Error("User ID is required for adding a todo.");
  }

  const title = formData.get("todo") as string;
  const description = formData.get("description") as string;

  if (!title || !description) {
    throw new Error("Both title and description are required.");
  }

  const newTodo: Todo = {
    title,
    description,
    timestamp: new Date().getTime(),
    completed: false,
  };

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app: any = await getApp();
    const db = getFirestore(app);

    const todoRef = collection(db, "users", userId, "todos");
    await addDoc(todoRef, newTodo);

    return { success: true, message: "Todo added successfully" };
  } catch (error) {
    console.error("Error adding todo:", error);
    throw new Error("Failed to add todo. Please try again later.");
  }
};
