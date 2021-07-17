import React, { useCallback } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
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
          <Form>
            <FieldArea>
              <Text>Title</Text>
              <SimpleTextInput
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                placeholder="Set Title"
              />
            </FieldArea>
            <FieldArea>
              <Text>Deadline</Text>
              <SimpleTextInput
                onChangeText={handleChange("deadLine")}
                onBlur={handleBlur("deadLine")}
                value={values.deadLine}
                placeholder="Set Deadline"
              />
            </FieldArea>
            <TimeArea>
              <TimeContent>
                <Text>Start time</Text>
                <SimpleTextInput
                  onChangeText={handleChange("startTime")}
                  onBlur={handleBlur("startTime")}
                  value={values.startTime}
                  placeholder="Set Start time"
                />
              </TimeContent>
              <TimeContent2>
                <Text>End time</Text>
                <SimpleTextInput
                  onChangeText={handleChange("endTime")}
                  onBlur={handleBlur("endTime")}
                  value={values.endTime}
                  placeholder="Set End time"
                />
              </TimeContent2>
            </TimeArea>
            <FieldArea>
              <Text>Remind</Text>
              <SimpleTextInput
                onChangeText={handleChange("remind")}
                onBlur={handleBlur("remind")}
                value={values.remind}
                placeholder="Set Remind"
              />
            </FieldArea>
            <FieldArea>
              <Text>Repeat</Text>
              <SimpleTextInput
                onChangeText={handleChange("repeat")}
                onBlur={handleBlur("repeat")}
                value={values.repeat}
                placeholder="Set Repeat"
              />
            </FieldArea>
          </Form>
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
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGray};
  height: 44px;
  padding-left: 10px;
`;

const FieldArea = styled.View`
  margin-bottom: 10px;
`;

const TimeArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TimeContent = styled.View`
  flex: 1;
  margin-right: 10px;
`;

const TimeContent2 = styled.View`
  flex: 1;
`;

const Form = styled.View`
  flex: 1;
`;
