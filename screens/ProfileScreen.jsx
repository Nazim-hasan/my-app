import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fbfaf2",
          height: 400,
        }}
      >
        <View
          style={
            {
              // marginTop:20,
            }
          }
        >
          <Image
            style={{
              height: 150,
              width: 150,
              marginHorizontal: "auto",
              marginTop: "15%",
            }}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: "auto",
            marginTop: "5%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
            }}
          >
            Md.Nazim Hasan
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: "grey",
              fontWeight: "bold",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            User ID - 36329
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "red",
            //padding: 13,
            marginHorizontal: "30%",
            borderRadius: 5,
            marginTop: 30,
            //flexDirection:'row'
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
              padding: 10,
            }}
          >
            Edit Profile
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: 18,
              marginHorizontal: 12,
            }}
          >
            Personal Information
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 12,
              }}
            >
              Name:
            </Text>
            <Text
              style={{
                marginLeft: 5,
              }}
            >
              Md.Nazim Hasan
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 12,
              }}
            >
              Mobile:
            </Text>
            <Text
              style={{
                marginLeft: 5,
              }}
            >
              0177862911
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 12,
              }}
            >
              Email:
            </Text>
            <Text
              style={{
                marginLeft: 5,
              }}
            >
              dev.nazim99@gmail.com
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 12,
              }}
            >
              Address:
            </Text>
            <Text
              style={{
                marginLeft: 5,
              }}
            >
              Dhaka, Bangladesh Dhaka
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text
            style={{
              marginLeft: 12,
              color: "grey",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Account
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.3,
            marginTop: 10,
            borderColor: "grey",
            marginHorizontal:8,
          }}
        ></View>
        <View
          style={{
            marginTop: 6,
            marginLeft: 12,
          }}
        >
          <Text
            style={{
              //color:'bl',
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            About
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.3,
            marginTop: 10,
            borderColor: "grey",
            marginHorizontal:8,
          }}
        ></View>
        <View style={{
          backgroundColor:'#dbe2e9',
          marginHorizontal:10,
          marginTop:15,
          borderRadius:10,
        }}>
          <Text style={{
            fontWeight:'bold',
            fontSize:16,
            padding:14
          }}>Talk with us about any queries</Text>
        </View>
        <View style={{
          
          marginTop:10,
          
        }}>
          <Text style={{
            fontWeight:'bold',
            fontSize:16,
            marginLeft:13,
            
          }}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
