import React, { FC } from "react";
import { Text } from "react-native";
import { Task } from "../screens/Board";

export const FlatListItem: FC<Task> = ({ item }) => {
  return <Text>{item.title}</Text>;
};
