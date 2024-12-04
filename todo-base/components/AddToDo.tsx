"use client";

import React, { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { addToDo } from '@/actions/todoActions';


const AddTodoComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const user = useAuth();

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      const result = await addToDo(formData, user?.uid);
      console.log(result.message);
    } catch (error) {
      console.error("Failed to add todo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form action={handleSubmit}>
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
