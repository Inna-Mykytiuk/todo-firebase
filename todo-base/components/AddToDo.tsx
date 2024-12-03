"use client"

import React, { useState } from 'react';

type Todo = {
  title: string; // Назва завдання
  description: string; // Опис завдання
  timestamp: number; // Час створення
  completed: boolean; // Стан виконання
}

const AddTodoComponent = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get('todo') as string; // Отримуємо значення інпута
    const description = formData.get('description') as string; // Отримуємо значення текстового поля

    // Створюємо новий об'єкт Todo
    const newTodo: Todo = {
      title,
      description,
      timestamp: new Date().getTime(),
      completed: false,
    };

    // Оновлюємо масив завдань
    setTodos([...todos, newTodo]);
    e.currentTarget.reset(); // Очищення форми
  };

  console.log(todos);


  return (
    <>
      <form onSubmit={handleSubmit}>
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
          Add
        </button>
      </form>
      <div>
        <h2>Todo List</h2>
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <h3> Title: {todo.title}</h3>
                <p>Description: {todo.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks added yet!</p>
        )}
      </div>
    </>
  );
};

export default AddTodoComponent;
