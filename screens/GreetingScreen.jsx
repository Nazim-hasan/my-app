import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const GreetingScreen = () => {
  const navigation = useNavigation();
  const handleStartButton = () => {
    navigation.navigate("Login")
  }
  return (
    <View>
      <View
        style={{
          height: "60%",
        }}
      >
        <Image style={{
          height:"80%",
          width: "60%",
          marginTop: "25%",
          marginHorizontal:"20%"
          
        }} source={require("../assets/images/person.png")}/>
      </View>
      <View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          {`Task Management & \nTo Do List`}
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            marginHorizontal: 50,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          This productive tool is used to help your management and other
          activites
        </Text>
        <TouchableOpacity
          onPress={handleStartButton}
          style={{
            backgroundColor: "blue",
            marginHorizontal: 25,
            marginTop: 15,
            borderRadius: 10,
            padding: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Let's Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreetingScreen;

const styles = StyleSheet.create({});
