"use client";

import useAuth from "@/hooks/useAuth";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase/clientApp";
import ToDoItem from "./ToDoItem";

type Todo = {
  id: string;
  title: string;
  description: string;
  timestamp: number;
  completed: boolean;
};

const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const auth = useAuth();

  useEffect(() => {
    if (!auth?.uid) return;
    const todosRef = collection(db, "users", auth?.uid, "todos");
    const unsubscribe = onSnapshot(todosRef, (snapshot) => {
      const todos: Todo[] = [];
      snapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id } as Todo);
      });
      setTodos(todos);
    });

    return () => unsubscribe();
  }, [auth?.uid]);

  return (
    <div className="mt-10 w-full md:w-[450px]  mb-[100px]">
      <h2 className="mb-4 text-center text-xl font-bold">ToDo List</h2>
      {todos.length > 0 ? (
        <ul className="flex w-full flex-col gap-6">
          {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
};

export default ToDoList;
