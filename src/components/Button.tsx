import { TouchableOpacity, Text } from "react-native";
import React, { FC, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}
export const Button: FC<ButtonProps> = ({ title, onPress, disabled }) => {
  return (
    <ButtonContainer onPress={onPress} disabled={disabled}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.green50};
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.white};
`;
