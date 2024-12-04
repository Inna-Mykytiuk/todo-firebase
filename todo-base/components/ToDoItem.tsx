"use client"

import React from 'react'
import useAuth from '@/hooks/useAuth'
import { deleteToDo, updateToDo, updateStatus } from '@/actions/todoActions';
import Checkbox from './Checkbox';
import InputField from './InputField';

type Todo = {
  id: string;
  title: string;
  description: string;
  timestamp: number;
  completed: boolean;
};

const ToDoItem = ({ todo }: { todo: Todo }) => {

  const auth = useAuth();

  return (
    <li className='shadow-md p-2'>
      <p className='text-xs'>{new Date(todo.timestamp).toLocaleString()}</p>
      <div className="flex hover:bg-slate-300">
        <Checkbox
          checked={todo.completed}
          ariaLabel="Mark as completed"
          onChange={(checked) => updateStatus(auth?.uid ?? '', todo.id, checked)}
        />
        <div className='flex flex-col'>
          <InputField
            name="title"
            defaultValue={todo.title}
            disabled={todo.completed}
            ariaLabel="Edit task title"
            onBlur={(value) => updateToDo(auth?.uid ?? '', todo.id, 'title', value)}
            className={`
          ${todo.completed
                ? 'complete-todo'
                : 'incomplete-todo'}
        `}
          />
          <InputField
            name="description"
            defaultValue={todo.description}
            disabled={todo.completed}
            ariaLabel="Edit task description"
            onBlur={(value) => updateToDo(auth?.uid ?? '', todo.id, 'description', value)}
            className={`
          ${todo.completed
                ? 'complete-todo'
                : 'incomplete-todo'}
        `}
          />
        </div>
        <button
          type="button"
          className='bg-red-600 text-white text-sm px-4 rounded-md hover:bg-red-700 transition-all duration-300 ease-in-out'
          onClick={() => deleteToDo(auth?.uid ?? '', todo.id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default ToDoItem
