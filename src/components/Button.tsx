import { TouchableOpacity, Text } from "react-native";
import React, { FC, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

interface ButtonProps {
  title: string;
  onPress?: () => void;
}
export const Button: FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

//background-color: : ${(props) => props.theme.green50};
const ButtonContainer = styled.TouchableOpacity`
  background-color: #5dbd76;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;
