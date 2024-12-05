"use client";

import { deleteToDo, updateStatus, updateToDo } from "@/actions/todoActions";
import useAuth from "@/hooks/useAuth";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

import Checkbox from "./Checkbox";
import InputField from "./InputField";

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
    <li className="card-wrapper backlog-color">
      <div className="felx flex-col p-4">
        <p className="mb-4 text-xs font-bold">
          {new Date(todo.timestamp).toLocaleString()}
        </p>
        <div className="flex">
          <Checkbox
            checked={todo.completed}
            ariaLabel="Mark as completed"
            onChange={(checked) =>
              updateStatus(auth?.uid ?? "", todo.id, checked)
            }
          />
          <div className="flex w-full justify-between">
            <div className="mr-4 flex w-full flex-col">
              <InputField
                name="title"
                defaultValue={todo.title}
                disabled={todo.completed}
                ariaLabel="Edit task title"
                onBlur={(value) =>
                  updateToDo(auth?.uid ?? "", todo.id, "title", value)
                }
                className={`${
                  todo.completed
                    ? "complete-todo mb-4 w-full text-lg font-bold"
                    : "incomplete-todo mb-4 w-full text-lg font-bold"
                }`}
              />
              <InputField
                name="description"
                defaultValue={todo.description}
                disabled={todo.completed}
                ariaLabel="Edit task description"
                onBlur={(value) =>
                  updateToDo(auth?.uid ?? "", todo.id, "description", value)
                }
                className={`${
                  todo.completed
                    ? "complete-todo min-h-[48px] w-full resize-none overflow-ellipsis text-base"
                    : "incomplete-todo min-h-[48px] w-full resize-none overflow-ellipsis text-base"
                }`}
                isTextArea={true}
              />
            </div>
            <button
              type="button"
              aria-label="Delete task button"
              className="flex rounded-md transition-all duration-300 ease-in-out hover:scale-x-95"
              onClick={() => deleteToDo(auth?.uid ?? "", todo.id)}
            >
              <MdDeleteForever className="mb-2 h-[32px] w-[32px] text-xl text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
