import React from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "../components/Button";
import { FlatListItem } from "../components/FlatListItem";
import { useShowAddTask } from "../navigation";

export interface Task {
  title: string;
}
const data: Task[] = [{ title: "comer" }, { title: "bailar" }];

export const Board = () => {
  const showAddTask = useShowAddTask();
  return (
    <View>
      <Text>Board</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <FlatListItem item={item} />}
      />
      <Button title="Add a task" onPress={showAddTask} />
    </View>
  );
};
