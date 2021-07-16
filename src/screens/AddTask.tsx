import React, { useCallback } from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "../components/Button";

import { Formik } from "formik";
import { Container } from "../utils/styled";
import { useTodos } from "../utils/TodoContext";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

export const AddTask = () => {
  const { addTodo } = useTodos();
  const navigation = useNavigation();
  const onSubmit = useCallback(
    (values, setSubmitting) => {
      setSubmitting(true);
      addTodo(values);
      setSubmitting(false);
      navigation.goBack();
    },
    [navigation]
  );
  return (
    <Formik
      initialValues={{
        title: "a",
        deadLine: "a",
        startTime: "a",
        endTime: "a",
        remind: "a",
        repeat: "a",
        completed: false,
        favorite: false,
      }}
      onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isSubmitting,
        isValid,
      }) => (
        <Container>
          <Text>Title</Text>
          <SimpleTextInput
            onChangeText={handleChange("title")}
            onBlur={handleBlur("title")}
            value={values.title}
            placeholder="Set Title"
          />
          <Text>Deadline</Text>
          <TextInput
            onChangeText={handleChange("deadLine")}
            onBlur={handleBlur("deadLine")}
            value={values.deadLine}
            placeholder="Set Deadline"
          />
          <Text>Start time</Text>
          <TextInput
            onChangeText={handleChange("startTime")}
            onBlur={handleBlur("startTime")}
            value={values.startTime}
            placeholder="Set Start time"
          />
          <Text>End time</Text>
          <TextInput
            onChangeText={handleChange("endTime")}
            onBlur={handleBlur("endTime")}
            value={values.endTime}
            placeholder="Set End time"
          />
          <Text>Remind</Text>
          <TextInput
            onChangeText={handleChange("remind")}
            onBlur={handleBlur("remind")}
            value={values.remind}
            placeholder="Set Remind"
          />
          <Text>Repeat</Text>
          <TextInput
            onChangeText={handleChange("repeat")}
            onBlur={handleBlur("repeat")}
            value={values.repeat}
            placeholder="Set Repeat"
          />
          <Button
            onPress={handleSubmit}
            title="Create Task"
            disabled={isSubmitting || !isValid}
          />
        </Container>
      )}
    </Formik>
  );
};

const SimpleTextInput = styled.TextInput`
  border: 1px;
`;
