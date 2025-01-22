import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
//import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const PostDetailsScreen = () => {
  //const { params } = useRoute();
  //console.log("params", params);
  const navigation = useNavigation();
  const handleStartButton = () => {
    navigation.navigate("PostDirection");
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <View>
          <View
            style={{
              borderWidth: 1,
              //height: 900,
              backgroundColor: "#dddbce",
            }}
          >
            <View
              style={{
                //backgroundColor: "grey",
                height: 300,
                marginHorizontal: 2,
                marginTop: 5,
              }}
            >
              <Image
                style={{
                  height: 300,
                  borderRadius: 10,
                }}
                source={{
                  uri: "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=",
                }}
              />
            </View>
            <View
              style={{
                //backgroundColor:'grey',
                height: 70,
              }}
            >
              <Image
                style={{
                  height: 90,
                  width: "100%",
                }}
                source={{
                  uri: "https://thumbs.dreamstime.com/b/icon-like-comment-copy-share-love-colorful-button-set-social-media-notification-icons-facebook-thumb-up-flat-website-330326655.jpg",
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  marginTop: 30,
                  marginHorizontal: 10,
                  fontSize: 25,
                }}
              >
                A golden sun slowly dips below the horizon, casting a warm amber
                glow over the tranquil lake. The water mirrors the fiery hues of
                the sky, rippling gently as a cool breeze whispers through the
                surrounding forest. Tall pine trees stand like silent sentinels,
                their dark silhouettes etched against the fading light. Birds
                flit gracefully between the branches, their songs blending
                harmoniously with the rustling leaves. In the distance, a
                majestic mountain range looms, its peaks kissed by the last rays
                of sunlight. The air is crisp and filled with the earthy scent
                of moss and wildflowers, creating a serene moment of natural
                perfection.As the evening deepens, the vibrant colors of the
                sunset fade into a tapestry of soft purples and velvety blues.
                Stars begin to twinkle in the darkening sky, their brilliance
                reflected in the lake's glassy surface. Fireflies emerge from
                the shadows, their golden glimmers dancing like tiny lanterns in
                the dusk. The gentle hum of crickets fills the air, a soothing
                melody that blends with the occasional hoot of an owl hidden
                among the trees. The mountain peaks now appear as jagged
                silhouettes, crowned by a faint halo of mist that glows under
                the pale light of the rising moon. A narrow stream winds its way
                through the forest, its crystal-clear waters babbling softly as
                they meander over smooth stones and mossy roots. Nearby, a
                wooden bridge arches gracefully over the stream, its weathered
                planks adding a touch of rustic charm to the idyllic scene.
              </Text>
            </View>
            <View style={{
              marginTop: 90,
              borderWidth: 0.3
            }}/>
          <View style={{
            height: 500
          }}/>
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity onPress={handleStartButton}>
          <Text
            style={{
              font: "white",
              marginHorizontal: 10,
              fontSize: 25,
              backgroundColor: "#dfe3e8",
              marginBottom: 15,

              textAlign: "center",
            }}
          >
            Go to next page
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({});
