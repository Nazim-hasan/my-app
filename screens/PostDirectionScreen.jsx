import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PostDirectionScreen = () => {
  const navigation = useNavigation();
    const handleStartButton = () => {
navigation.navigate('Profile');
    }
  
  return (
    <View>
      <View
        style={{
          height: 450,
          backgroundColor: "grey",
        }}
      ></View>
      <View>
        <View
          style={{
            borderWidth: 3,
            width: 45,
            borderRadius: 5,
            marginHorizontal: "auto",
            marginTop: 5,
          }}
        ></View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            // flex: 1,
            // backgroundColor: 'red'
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                //marginLeft: 10,
                // flex: 1,
              }}
            >
              Order Summary
            </Text>
          </View>
          <View>
            <Image
              style={{
                height: 40,
                width: 30,
                // flex: 1,
              }}
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/017/178/563/non_2x/cross-check-icon-symbol-on-transparent-background-free-png.png",
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text>Sub total</Text>
          <Text>TK 239.00</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text>Delivery Fee</Text>
          <Text>TK 69.00</Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            marginTop: 5,
            borderColor: "grey",
            marginHorizontal: 18,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Total Bill
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            TK 308
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text style={{}}>
            * Item price may subject to change based on the
          </Text>
          <Text
            style={
              {
                // marginLeft: 10
              }
            }
          >
            {" "}
            policies of the restaurant or flower shop.
          </Text>
          <Text
            style={{
              marginTop: 5,
            }}
          >
            * The Rounding-up formula has been implemented.
          </Text>
        </View>

        <TouchableOpacity onPress={handleStartButton}
          style={{
            backgroundColor: "red",
            padding: 13,
            marginHorizontal: 20,
            borderRadius: 10,
            marginTop: 15,
          }}
           
        >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Agreed
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostDirectionScreen;
