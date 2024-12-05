"use client";

import React from "react";
import useAuth from "@/hooks/useAuth";
import { deleteToDo, updateToDo, updateStatus } from "@/actions/todoActions";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import { MdDeleteForever } from "react-icons/md";

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
        <p className="text-xs font-bold mb-4">
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
          <div className="flex justify-between w-full">
            <div className="flex flex-col w-full mr-4">
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
                    ? "complete-todo w-full mb-4 text-lg font-bold"
                    : "incomplete-todo w-full mb-4 text-lg font-bold"
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
                    ? "complete-todo w-full resize-none min-h-[48px] overflow-ellipsis text-base"
                    : "incomplete-todo w-full resize-none min-h-[48px] overflow-ellipsis text-base"
                }`}
                isTextArea={true}
              />
            </div>
            <button
              type="button"
              aria-label="Delete task button"
              className="rounded-md hover:scale-x-95 transition-all duration-300 ease-in-out flex"
              onClick={() => deleteToDo(auth?.uid ?? "", todo.id)}
            >
              <MdDeleteForever className="h-[32px] w-[32px] text-red-600 text-xl  mb-2" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
