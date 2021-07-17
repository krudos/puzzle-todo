import React, { FC, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Todo, useTodos } from "../utils/TodoContext";
import { Icon } from "./Icon";
import styled from "styled-components";
import { FilterType } from "../screens/Board";

interface Props {
  item: Todo;
  index: number;
  currentFilter: FilterType;
}

const colors = [
  "#ac45ba",
  "#27fb6bff",
  "#005eb8",
  "#036d19ff",
  "#a57455",
  "#6c544c",
];

const getColorId = (index: number) => {
  return (index + colors.length) % colors.length;
};

export const FlatListItem: FC<Props> = ({ item, index, currentFilter }) => {
  const { updateTodo } = useTodos();

  const toggleCompleted = useCallback(() => {
    const itemToggle = { ...item };
    itemToggle.completed = !itemToggle.completed;
    updateTodo(item, itemToggle);
  }, [item, updateTodo]);

  const toggleFavorite = useCallback(() => {
    const itemToggle = { ...item };
    itemToggle.favorite = !itemToggle.favorite;
    updateTodo(item, itemToggle);
  }, [item, updateTodo]);
  return (
    <ItemContainer>
      <TouchableOpacity
        onPress={
          currentFilter === "Favorite" ? toggleFavorite : toggleCompleted
        }
      >
        <Icon
          name={
            currentFilter === "Favorite"
              ? item.favorite
                ? "heart-full"
                : "heart-empty"
              : item.completed
              ? "check-square"
              : "square"
          }
          color={colors[getColorId(index)]}
        />
      </TouchableOpacity>
      <ItemText>{item.title}</ItemText>
    </ItemContainer>
  );
};

const ItemContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const ItemText = styled.Text`
  margin-left: 20px;
`;
