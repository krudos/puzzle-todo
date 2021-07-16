import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Board } from "./screens/Board";
import { AddTask } from "./screens/AddTask";
import { View } from "react-native";
import { Icon } from "./components/Icon";
import { Screen } from "./navigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screen.Board}>
        <Stack.Screen
          name={Screen.Board}
          component={Board}
          options={{
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <Icon iconName="buscar" />
                <Icon iconName="campana" />
                <Icon iconName="hamb" />
              </View>
            ),
          }}
        />
        <Stack.Screen name={Screen.AddTask} component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
