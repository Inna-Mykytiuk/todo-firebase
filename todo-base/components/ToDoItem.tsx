"use client"

import React from 'react'
// import { Todo } from '@/types/types'
import useAuth from '@/hooks/useAuth'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/clientApp'


type Todo = {
  id: string;
  title: string;
  description: string;
  timestamp: number;
  completed: boolean;
};

const ToDoItem = ({ todo }: { todo: Todo }) => {

  const auth = useAuth();

  const handleCheckBox = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!auth?.uid) {
      console.error("User ID is undefined. Please ensure the user is authenticated.");
      return;
    }
    const checked = e.target.checked;

    try {
      const docRef = doc(db, "users", auth?.uid, "todos", todo.id);
      await updateDoc(docRef, { completed: checked });
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };


  const handleBlur = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!auth?.uid) {
      console.error("User ID is undefined. Please ensure the user is authenticated.");
      return;
    }

    const fieldName = e.target.name;
    const newValue = e.target.value;

    try {
      const docRef = doc(db, "users", auth.uid, "todos", todo.id);
      await updateDoc(docRef, { [fieldName]: newValue });
      console.log(`Field "${fieldName}" updated to: ${newValue}`);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };


  const handleDelete = async () => {
    if (!auth?.uid) {
      console.error("User ID is undefined. Please ensure the user is authenticated.");
      return;
    }

    try {
      const docRef = doc(db, "users", auth.uid, "todos", todo.id);
      await deleteDoc(docRef);
      console.log(`Todo ${todo.id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <li className="flex mx-1 hover:bg-slate-300">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckBox}
      />
      <input
        name="title"
        onBlur={handleBlur}
        type="text"
        defaultValue={todo.title}
        disabled={todo.completed}
        className={`
        ${todo.completed ? 'border-0 ml-3 focus:border-0 focus:outline-none focus:ring-0 rounded-none line-through hover:bg-slate-300' :
            'border-0 ml-3 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-2 focus:outline-none focus:ring-0 rounded-none hover:bg-slate-300'}
      `}
      />
      <input
        name="description"
        onBlur={handleBlur}
        type="text"
        defaultValue={todo.description}
        disabled={todo.completed}
        className={`
        ${todo.completed ? 'border-0 ml-3 focus:border-0 focus:outline-none focus:ring-0 rounded-none line-through hover:bg-slate-300' :
            'border-0 ml-3 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-2 focus:outline-none focus:ring-0 rounded-none hover:bg-slate-300'}
      `}
      />
      <button onClick={handleDelete}>x</button>

    </li>
  )
}

export default ToDoItem
