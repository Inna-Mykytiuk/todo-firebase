import { deleteToDo, updateStatus } from "@/actions/todoActions";
import ToDoItem from "@/components/ToDoItem";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// Mocking the functions
jest.mock("@/actions/todoActions", () => ({
  deleteToDo: jest.fn(),
  updateStatus: jest.fn(),
  updateToDo: jest.fn(),
}));

// Mocking useAuth hook with the correct return value
jest.mock("@/hooks/useAuth", () =>
  jest.fn().mockReturnValue({ uid: "user-id" })
);

// Test: Should render todo item with correct title and description
test("should render todo item with correct title and description", () => {
  const todo = {
    id: "1",
    title: "Test ToDo",
    description: "Test description",
    timestamp: 1672531199000,
    completed: false,
  };

  render(<ToDoItem todo={todo} />);

  // Check for title and description rendering
  expect(screen.getByDisplayValue("Test ToDo")).toBeInTheDocument();
  expect(screen.getByDisplayValue("Test description")).toBeInTheDocument();
});

// Test: Should call updateStatus when checkbox is clicked
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

  // Simulating checkbox click
  fireEvent.click(checkbox);

  // Verify updateStatus was called
  expect(updateStatus).toHaveBeenCalledWith("user-id", "1", true);
});

// Test: Should call deleteToDo when delete button is clicked
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

  // Simulate delete button click
  fireEvent.click(deleteButton);

  // Verify deleteToDo was called
  expect(deleteToDo).toHaveBeenCalledWith("user-id", "1");
});

// Test: Should call deleteToDo when delete button is clicked for completed todo
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

  // Simulate delete button click
  fireEvent.click(deleteButton);

  // Verify deleteToDo was called
  expect(deleteToDo).toHaveBeenCalledWith("user-id", "1");
});

// Test: Should disable editing for completed todo
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

  // Verify the input fields are disabled for completed tasks
  expect(titleInput).toBeDisabled();
  expect(descriptionInput).toBeDisabled();
});
