"use client"

import React from 'react'
import useAuth from '@/hooks/useAuth'
// import { doc, updateDoc } from 'firebase/firestore'
// import { db } from '../firebase/clientApp';
import { deleteToDo, updateToDo, updateStatus } from '@/actions/todoActions';


type Todo = {
  id: string;
  title: string;
  description: string;
  timestamp: number;
  completed: boolean;
};

const ToDoItem = ({ todo }: { todo: Todo }) => {

  const auth = useAuth();

  // const handleCheckBox = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!auth?.uid) {
  //     console.error("User ID is undefined. Please ensure the user is authenticated.");
  //     return;
  //   }
  //   const checked = e.target.checked;

  //   try {
  //     const docRef = doc(db, "users", auth?.uid, "todos", todo.id);
  //     await updateDoc(docRef, { completed: checked });
  //   } catch (error) {
  //     console.error("Error updating document:", error);
  //   }
  // };


  return (
    <li className="flex mx-1 hover:bg-slate-300">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => updateStatus(auth?.uid ?? '', todo.id, e.target.checked)}
      />
      <input
        name="title"
        onBlur={(e) => updateToDo(auth?.uid ?? '', todo.id, 'title', e.target.value)}
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
        onBlur={(e) => updateToDo(auth?.uid ?? '', todo.id, 'description', e.target.value)}
        type="text"
        defaultValue={todo.description}
        disabled={todo.completed}
        className={`
        ${todo.completed ? 'border-0 ml-3 focus:border-0 focus:outline-none focus:ring-0 rounded-none line-through hover:bg-slate-300' :
            'border-0 ml-3 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-2 focus:outline-none focus:ring-0 rounded-none hover:bg-slate-300'}
      `}
      />
      <button onClick={() => deleteToDo(auth?.uid ?? '', todo.id)}>x</button>

    </li>
  )
}

export default ToDoItem
