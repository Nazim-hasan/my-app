import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Post = ({ postInformation }) => {
  const navigation = useNavigation();
  function handlePostDetails() {
    navigation.navigate("PostDetails", {
      title: postInformation.title,
    });
  }
  return (
    <TouchableOpacity onPress={handlePostDetails}>
      <View
        style={{
          marginVertical: 10,
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
            height: 310,
          }}
        >
          <View
            style={{
              height: 200,
            }}
          >
            <View>
              <Image
                style={{
                  height: 200,
                  borderRadius: 10,
                }}
                source={{
                  uri: postInformation.photo,
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
            }}
          >
            <Text>{postInformation.title}</Text>
            <Text>{postInformation.describe}</Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                backgroundColor: "skyblue",
                width: "30%",
                color: "white",
                textAlign: "center",
                padding: 10,
              }}
            >
              Like
            </Text>
            <Text
              style={{
                backgroundColor: "red",
                width: "30%",
                color: "white",
                textAlign: "center",
                padding: 10,
              }}
            >
              Comment
            </Text>
            <Text
              style={{
                backgroundColor: "blue",
                width: "30%",
                color: "white",
                textAlign: "center",
                padding: 10,
              }}
            >
              Share
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
