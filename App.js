import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={[{ fontSize: 30 }]}>Handle Text Input</Text>
      <Text style={[{ fontSize: 30 }]}>Your name is : {name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name "
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Clear Input Value" onPress={() => setName("")} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: "red",
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
  },
});
export default App;
