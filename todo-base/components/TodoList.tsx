"use client";

import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/clientApp';

import useAuth from '@/hooks/useAuth';
import ToDoItem from './ToDoItem';

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
    const todosRef = collection(db, 'users', auth?.uid, 'todos');
    const unsubscribe = onSnapshot(todosRef, (snapshot) => {
      const todos: Todo[] = [];
      snapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id } as Todo);
      });
      setTodos(todos);
    });

    return () => unsubscribe();
  }, [auth?.uid]);

  console.log(todos);

  return (
    <div>
      <h1>ToDo List</h1>
      {todos.length > 0 ? (
        <ul>
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
