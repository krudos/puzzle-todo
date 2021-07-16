import React, { useCallback, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Todo {
  title: string;
}

interface TodoContextProps {
  allTodo: Todo[];
  addTodo: (value: Todo) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  addTodo(): void {},
  allTodo: [],
});

const TODOS = "TODOS";

export const TodoWrapper: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(TODOS).then((jsonvalue) => {
      const data = jsonvalue ? JSON.parse(jsonvalue) : [];
      setTodos(data);
    });
  }, []);

  const addTodo = useCallback(
    (item: Todo) => {
      const data = [...todos, item];
      const jsonValue = JSON.stringify([...todos, item]);
      AsyncStorage.setItem(TODOS, jsonValue).then(() => {
        setTodos(data);
      });
    },
    [todos]
  );
  return (
    <TodoContext.Provider
      value={{
        allTodo: todos,
        addTodo: addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodoContext);
};
