import { deleteToDo, updateStatus } from "@/actions/todoActions";
import ToDoItem from "@/components/ToDoItem";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("@/actions/todoActions", () => ({
  deleteToDo: jest.fn(),
  updateStatus: jest.fn(),
  updateToDo: jest.fn(),
}));

jest.mock("@/hooks/useAuth", () =>
  jest.fn().mockReturnValue({ uid: "user-id" })
);

test("should render todo item with correct title and description", () => {
  const todo = {
    id: "1",
    title: "Test ToDo",
    description: "Test description",
    timestamp: 1672531199000,
    completed: false,
  };

  render(<ToDoItem todo={todo} />);

  expect(screen.getByDisplayValue("Test ToDo")).toBeInTheDocument();
  expect(screen.getByDisplayValue("Test description")).toBeInTheDocument();
});

test("should call updateStatus when checkbox is clicked", () => {
  const todo = {
    id: "1",
    title: "Test ToDo",
    description: "Test description",
    timestamp: 1672531199000,
    completed: false,
  };

  render(<ToDoItem todo={todo} />);

  const checkbox = screen.getByLabelText("Mark as completed");

  fireEvent.click(checkbox);

  expect(updateStatus).toHaveBeenCalledWith("user-id", "1", true);
});

test("should call deleteToDo when delete button is clicked", () => {
  const todo = {
    id: "1",
    title: "Test ToDo",
    description: "Test description",
    timestamp: 1672531199000,
    completed: false,
  };

  render(<ToDoItem todo={todo} />);

  const deleteButton = screen.getByLabelText("Delete task button");

  fireEvent.click(deleteButton);

  expect(deleteToDo).toHaveBeenCalledWith("user-id", "1");
});

test("should call deleteToDo when delete button is clicked for completed todo", () => {
  const todo = {
    id: "1",
    title: "Completed ToDo",
    description: "Completed description",
    timestamp: 1672531199000,
    completed: true,
  };

  render(<ToDoItem todo={todo} />);

  const deleteButton = screen.getByLabelText("Delete task button");

  fireEvent.click(deleteButton);

  expect(deleteToDo).toHaveBeenCalledWith("user-id", "1");
});

test("should disable editing for completed todo", () => {
  const todo = {
    id: "1",
    title: "Completed ToDo",
    description: "Completed description",
    timestamp: 1672531199000,
    completed: true,
  };

  render(<ToDoItem todo={todo} />);

  const titleInput = screen.getByLabelText("Edit task title");
  const descriptionInput = screen.getByLabelText("Edit task description");

  expect(titleInput).toBeDisabled();
  expect(descriptionInput).toBeDisabled();
});
