import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Board } from "./screens/Board";
import { AddTask } from "./screens/AddTask";
import { Screen } from "./navigation";

import styled, { ThemeProvider } from "styled-components";
import { TodoWrapper } from "./utils/TodoContext";
import { IconButton } from "./components/IconButton";

const Stack = createStackNavigator();

const theme = {
  green50: "#5dbd76",
  white: "#ffffff",
  black: "#000000",
  gray: "#808080",
  lightGray: "#D3D3D3",
  transparent: "transparent",
};

export default function App() {
  return (
    <TodoWrapper>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Screen.Board}
            screenOptions={{ headerTitleAlign: "left" }}
          >
            <Stack.Screen
              name={Screen.Board}
              component={Board}
              options={{
                headerRight: () => (
                  <HeaderRightContainer>
                    <IconButton iconName="search" />
                    <IconButton iconName="bell" />
                    <IconButton iconName="bars" />
                  </HeaderRightContainer>
                ),
              }}
            />
            <Stack.Screen
              name={Screen.AddTask}
              component={AddTask}
              options={{ headerBackTitleVisible: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </TodoWrapper>
  );
}

const HeaderRightContainer = styled.View`
  flex-direction: row;
`;
