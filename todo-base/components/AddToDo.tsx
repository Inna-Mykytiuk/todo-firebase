"use client";

import React, { useState, useRef } from 'react';
import { db } from '@/firebase/clientApp';
import { collection, addDoc } from 'firebase/firestore';
import useAuth from '@/hooks/useAuth';
import { Todo } from '@/types/types';

// type Todo = {
//   id?: string;
//   title: string;
//   description: string;
//   timestamp: number;
//   completed: boolean;
// };

const AddTodoComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const user = useAuth();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      console.error("User is not authenticated.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const title = formData.get("todo") as string;
    const description = formData.get("description") as string;

    const newTodo: Todo = {
      title,
      description,
      timestamp: new Date().getTime(),
      completed: false,
    };

    try {
      setLoading(true);
      const todoRef = collection(db, "users", user?.uid, "todos");
      await addDoc(todoRef, newTodo);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error saving todo:", error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label htmlFor="todo-input" className="block text-sm font-medium text-gray-700">
          Task Title
        </label>
        <input
          type="text"
          id="todo-input"
          name="todo"
          placeholder="Add To Do..."
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="todo-description" className="block text-sm font-medium text-gray-700">
          Task Description
        </label>
        <textarea
          id="todo-description"
          name="description"
          placeholder="Add task description..."
          rows={4}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
};

export default AddTodoComponent;
