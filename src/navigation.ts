import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export const Screen = {
  Board: "Board",
  AddTask: "AddTask",
};

export const useShowAddTask = () => {
  const navigation = useNavigation();

  return useCallback(() => {
    navigation.navigate(Screen.AddTask);
  }, [navigation]);
};
