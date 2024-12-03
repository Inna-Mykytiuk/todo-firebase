interface Todo {
  title: string;
  description: string;
  timestamp: number;
  completed: boolean;
}

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <small>{new Date(todo.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks added yet!</p>
      )}
    </div>
  );
};

export default TodoList;