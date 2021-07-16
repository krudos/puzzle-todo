import { TouchableOpacity, Text } from "react-native";
import React, { FC } from "react";

interface ButtonProps {
  title: string;
  onPress?: () => void;
}
export const Button: FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
