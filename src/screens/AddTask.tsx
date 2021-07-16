import React from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "../components/Button";

import { Container } from "../utils/styled";
export const AddTask = () => {
  return (
    <Container>
      <Text>Title</Text>
      <TextInput />
      <Text>Deadline</Text>
      <TextInput />
      <Text>Start time</Text>
      <TextInput />
      <Text>End time</Text>
      <TextInput />
      <Text>Remind</Text>
      <TextInput />
      <Text>Repeat</Text>
      <TextInput />
      <Button title={"Create Task"} onPress={null} />
    </Container>
  );
};
