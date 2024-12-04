"use client";

import React, { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { addToDo } from '@/actions/todoActions';
import SubmitButton from './SubmitButton';


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
    <form action={handleSubmit} className='flex flex-col w-full md:w-[450px]'>
      <input
        type="text"
        id="todo-input"
        name="todo"
        placeholder="Add To Do..."
        aria-label='Add To Do...'
        required
        className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-input focus:border-mainBcg focus:outline-none"
      />
      <textarea
        id="todo-description"
        name="description"
        placeholder="Add task description..."
        aria-label='Add task description...'
        rows={4}
        required
        className="h-[100px] w-full resize-none overflow-auto rounded-md border border-gray-300 px-4 py-2 shadow-input focus:border-mainBcg focus:outline-none mt-4"
      />
      <SubmitButton loading={loading} />
    </form>
  );
};

export default AddTodoComponent;
