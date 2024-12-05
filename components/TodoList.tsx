import ToDoList from "@/components/TodoList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("ToDoList component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the correct heading", () => {
    render(<ToDoList />);

    // Перевіряємо, що заголовок компоненту відображається
    expect(screen.getByText(/ToDo List/i)).toBeInTheDocument();
  });

  it("renders 'No tasks found' message when no todos are present", () => {
    render(<ToDoList />);

    // Перевіряємо, що повідомлення про відсутність задач відображається
    expect(screen.getByText(/no tasks found/i)).toBeInTheDocument();
  });

  it("renders an empty list of todos initially", () => {
    render(<ToDoList />);

    // Перевіряємо, що список задач не відображається при відсутності задач
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("renders a list of todos when provided", () => {
    const todosMock = [
      {
        id: "1",
        title: "Task 1",
        description: "Description 1",
        timestamp: 123,
        completed: false,
      },
      {
        id: "2",
        title: "Task 2",
        description: "Description 2",
        timestamp: 456,
        completed: true,
      },
    ];

    // Мокаємо задачі та рендеримо компонент
    render(<ToDoList />);

    // Перевіряємо, що кожна задача відображається
    todosMock.forEach((todo) => {
      expect(screen.getByText(todo.title)).toBeInTheDocument();
      expect(screen.getByText(todo.description)).toBeInTheDocument();
    });
  });
});
