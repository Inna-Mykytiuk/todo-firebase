import React from "react";
import AddToDo from "../../components/AddToDo";
import SignOutButton from "@/components/SignOutButton";
import ToDoList from "@/components/TodoList";

const TodoAppComponent = () => {
  return (
    <section className="pyt-[100px] h-screen">
      <div className="flex w-full justify-center bg-gradient py-[20px] shadow-lg">
        <SignOutButton />
      </div>
      <div className="container">
        <div className="mt-[40px] flex w-full flex-col items-center justify-center">
          <h1 className="mb-4 text-xl font-bold">Create New ToDo</h1>
          <AddToDo />
          <ToDoList />
        </div>
      </div>
    </section>
  );
};

export default TodoAppComponent;
