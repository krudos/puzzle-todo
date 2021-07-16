import React, { FC } from "react";
import { Text } from "react-native";
import { Todo } from "../utils/TodoContext";

interface Props {
  item: Todo;
}
export const FlatListItem: FC<Props> = ({ item }) => {
  return <Text>{item.title}</Text>;
};
