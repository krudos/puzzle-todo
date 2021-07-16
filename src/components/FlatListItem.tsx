import React, { FC } from "react";
import { Text, View } from "react-native";
import { Todo } from "../utils/TodoContext";
import { Icon } from "./Icon";
import styled from "styled-components";

interface Props {
  item: Todo;
}
export const FlatListItem: FC<Props> = ({ item }) => {
  return (
    <ItemContainer>
      <Icon name={item.completed ? "check-square" : "square"} />
      <Text>{item.title}</Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.View`
  flex-direction: row;
`;
