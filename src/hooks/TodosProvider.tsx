// TaskProvider.js
import React, { createContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const data = [
    { id: 1, task: 'mowing the lawn', is_done: false },
    { id: 2, task: 'learn lesson', is_done: false },
    { id: 3, task: 'learn programming', is_done: true }
  ];

  const [todos, setTodos] = useState(data);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
