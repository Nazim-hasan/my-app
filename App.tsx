import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const App = () => {
  return (
    <View>
      <View style={{ height: "70%" }}>
        <Image
          source={require("./assets/images/person.png")}
          style={{ width: "80%", height: "80%", marginHorizontal: "auto", marginTop: 50}}
        />
      </View>
      <View style={{}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {`Task management &\nTo-Do List`}
        </Text>
        <Text
          style={{ color: "gray", textAlign: "center", marginHorizontal: 20 }}
        >
          This productive tool is to design and help you to make better website.
          It is a simple and easy to use tool for web developers. You can create
          a list of tasks and subtasks. You can also set a deadline for the
          task. You can also set a priority
        </Text>
        <View
          style={{
            backgroundColor: "#5128E6",
            padding: 13,
            width: "90%",
            marginHorizontal: "auto",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Let's Start
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
