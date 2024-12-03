import React from 'react';
import AddToDo from "../../components/AddToDo";
import SignOutButton from '@/components/SignOutButton';

const TodoAppComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-16 w-full'>
      <SignOutButton />
      <h1>Welcome to my ToDo App</h1>
      <AddToDo />
    </div>
  )
}

export default TodoAppComponent
