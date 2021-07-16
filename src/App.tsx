import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Board } from "./screens/Board";
import { AddTask } from "./screens/AddTask";
import { Icon } from "./components/Icon";
import { Screen } from "./navigation";

import styled, { ThemeProvider } from "styled-components";
import { TodoWrapper } from "./utils/TodoContext";

const Stack = createStackNavigator();

const theme = {
  green50: "#5dbd76",
  white: "#ffffff",
};

export default function App() {
  return (
    <TodoWrapper>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={Screen.Board}>
            <Stack.Screen
              name={Screen.Board}
              component={Board}
              options={{
                headerRight: () => (
                  <HeaderRightContainer>
                    <Icon iconName="buscar" />
                    <Icon iconName="campana" />
                    <Icon iconName="hamb" />
                  </HeaderRightContainer>
                ),
              }}
            />
            <Stack.Screen name={Screen.AddTask} component={AddTask} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </TodoWrapper>
  );
}

const HeaderRightContainer = styled.View`
  flex-direction: row;
`;
