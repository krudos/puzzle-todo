import React, { useCallback, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Todo {
  title: string;
  deadLine: string;
  startTime: string;
  endTime: string;
  remind: string;
  repeat: string;
  completed: boolean;
  favorite: boolean;
}

interface TodoContextProps {
  allTodo: Todo[];
  addTodo: (value: Todo) => void;
  updateTodo: (valueOld: Todo, valueNew: Todo) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  updateTodo(): void {},
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

  const saveTodo = useCallback((data: Todo[]) => {
    const jsonValue = JSON.stringify(data);
    AsyncStorage.setItem(TODOS, jsonValue).then(() => {
      setTodos(data);
    });
  }, []);

  const addTodo = useCallback(
    (item: Todo) => {
      const data = [item, ...todos];
      saveTodo(data);
    },
    [saveTodo, todos]
  );

  const updateTodo = useCallback(
    (valueOld: Todo, valueNew: Todo) => {
      const data = [...todos];
      const oldIndex = todos.findIndex((x) => x === valueOld);
      data[oldIndex] = valueNew;
      saveTodo(data);
    },
    [saveTodo, todos]
  );

  return (
    <TodoContext.Provider
      value={{
        allTodo: todos,
        addTodo: addTodo,
        updateTodo: updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodoContext);
};
