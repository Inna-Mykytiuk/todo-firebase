import React from 'react';
import AddToDo from "../../components/AddToDo";
import SignOutButton from '@/components/SignOutButton';
import ToDoList from '@/components/TodoList';

const TodoAppComponent = () => {
  return (
    <section className='h-screen pyt-[100px] '>
      <div className="w-full bg-gradient py-[20px] shadow-lg flex justify-center">
        <SignOutButton />
      </div>
      <div className='container'>
        <div className='flex flex-col justify-center items-center w-full mt-[40px]'>
          <h1 className='text-xl font-bold mb-4'>Create New ToDo</h1>
          <AddToDo />
          <ToDoList />
        </div>
      </div>
    </section>
  )
}

export default TodoAppComponent
