import React, { FC } from "react";
import { Icon, IconNames } from "./Icon";
import styled from "styled-components";

interface IconProps {
  iconName: IconNames;
  onPress?: () => void;
}
export const IconButton: FC<IconProps> = ({ iconName, onPress }) => {
  return (
    <TouchArea onPress={onPress}>
      <Icon name={iconName} />
    </TouchArea>
  );
};

const TouchArea = styled.TouchableOpacity`
  margin-right: 10px;
`;
