import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { colors } from "../utils/colors";
import { useState } from "react";
import { RoundedButton } from "../components/RoundedButton";

const Focus = () => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          style={styles.textInput}
          placeholder="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={40} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: 25,
    flexDirection: "row",
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.white,
    height: 40,
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
  },
});

export default Focus;
