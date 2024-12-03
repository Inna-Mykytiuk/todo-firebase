"use client";

import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import useAuth from '@/hooks/useAuth';

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
    if (!auth) return;
    const todosRef = collection(db, 'users', auth?.uid, 'todos');
    const unsubscribe = onSnapshot(todosRef, (snapshot) => {
      if (!snapshot.empty) {
        const todos: Todo[] = [];
        snapshot.forEach((doc) => {
          todos.push({ ...doc.data(), id: doc.id } as Todo);
        });
        setTodos(todos);
      }
    });

    return () => unsubscribe();

  }, [auth]);

  // console.log(todos);

  return (
    <div>
      <h1>ToDo List</h1>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
};

export default ToDoList;
