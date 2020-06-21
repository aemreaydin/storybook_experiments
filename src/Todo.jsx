import React, { useState } from 'react';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="todo-input"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      <ul className="todos">
        {todos.map((value, index) => (
          <TodoItem key={`idx_${index + 1}`} todo={value} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
