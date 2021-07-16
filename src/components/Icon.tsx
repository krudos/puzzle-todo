import { Text, TouchableOpacity } from "react-native";

import React, { FC } from "react";

interface IconProps {
  iconName: string;
  onPress?: () => void;
}
export const Icon: FC<IconProps> = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{iconName}</Text>
    </TouchableOpacity>
  );
};
