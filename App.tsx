import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GreetingScreen from "./screens/GreetingScreen";
import PostScreen from "./screens/PostScreen";
import PostDetailsScreen from "./screens/PostDetailsScreen";
import PostDirectionScreen from "./screens/PostDirectionScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Greeting">
        <Stack.Screen name="Greeting" component={GreetingScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
        <Stack.Screen name="PostDirection" component={PostDirectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
