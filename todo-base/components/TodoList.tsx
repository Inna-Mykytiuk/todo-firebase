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
}

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
          console.log('Document ID:', doc.id);
          console.log('Document Data:', doc.data());
          todos.push({ ...doc.data(), id: doc.id });
        });
        console.log(todos);

        setTodos(todos);
      }

    });

    return () => unsubscribe();

  }, [auth]);

  return (
    <div>
      <h1>ToDo List</h1>
    </div>
  );
};

export default ToDoList;

// const TodoList = ({ todos }: { todos: Todo[] }) => {
//   return (
//     <div>
//       <h2>Todo List</h2>
//       {todos.length > 0 ? (
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>
//               <h3>{todo.title}</h3>
//               <p>{todo.description}</p>
//               <small>{new Date(todo.timestamp).toLocaleString()}</small>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No tasks added yet!</p>
//       )}
//     </div>
//   );
// };

// export default TodoList;