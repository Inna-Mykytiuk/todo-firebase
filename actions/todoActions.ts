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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  if (!title) {
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

export const deleteToDo = async (userId: string, todoId: string) => {
  if (!userId || !todoId) {
    throw new Error("User ID and Todo ID are required.");
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app: any = await getApp();
    const db = getFirestore(app);
    const todoRef = doc(db, "users", userId, "todos", todoId);
    await deleteDoc(todoRef);
    return { success: true, message: `Todo ${todoId} deleted successfully.` };
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Failed to delete todo. Please try again later.");
  }
};

export const updateToDo = async (
  userId: string,
  todoId: string,
  fieldName: string,
  newValue: string
) => {
  if (!userId || !todoId || !fieldName || !newValue) {
    throw new Error(
      "User ID, Todo ID, field name, and new value are required."
    );
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app: any = await getApp();
    const db = getFirestore(app);
    const todoRef = doc(db, "users", userId, "todos", todoId);

    await updateDoc(todoRef, { [fieldName]: newValue });

    return { success: true, message: `Todo ${todoId} updated successfully.` };
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error("Failed to update todo. Please try again later.");
  }
};

export const updateStatus = async (
  userId: string,
  todoId: string,
  status: boolean
) => {
  if (!userId || !todoId) {
    throw new Error("User ID and Todo ID are required.");
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app: any = await getApp();
    const db = getFirestore(app);
    const todoRef = doc(db, "users", userId, "todos", todoId);

    // Виправлено: зміна поля "completed" замість "complete"
    await updateDoc(todoRef, { completed: status });

    return { success: true, message: `Todo status updated successfully!` };
  } catch (error) {
    console.error("Error updating todo status:", error);
    throw new Error("Failed to update todo status. Please try again later.");
  }
};
