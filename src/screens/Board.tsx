import React from "react";
import { FlatList, Text } from "react-native";
import { Button } from "../components/Button";
import { FlatListItem } from "../components/FlatListItem";
import { useShowAddTask } from "../navigation";
import { Container } from "../utils/styled";
import { useTodos } from "../utils/TodoContext";

export const Board = () => {
  const showAddTask = useShowAddTask();
  const { allTodo } = useTodos();
  return (
    <Container>
      <FlatList
        keyExtractor={(item, index) => item.title + index}
        data={allTodo}
        renderItem={({ item }) => <FlatListItem item={item} />}
        ListEmptyComponent={() => <Text>Please add a Task</Text>}
      />
      <Button title="Add a task" onPress={showAddTask} />
    </Container>
  );
};
