import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Post from "../components/Post";
import { ScrollView } from "react-native";




const PostScreen = () => {



  const postList = [
    {
      title: "Exploring the Beauty of Nature",
      describe: "A journey through the most serene landscapes and breathtaking views around the world.",
      photo: "https://random-image-pepebigotes.vercel.app/api/random-image",
    },
    {
      title: "Tech Trends 2025",
      describe: "An insight into the emerging technologies and how they are shaping our future.",
      photo: "https://random-image-pepebigotes.vercel.app/api/random-image",
    },
    {
      title: "Healthy Living Tips",
      describe: "Practical advice on maintaining a balanced diet and staying fit.",
      photo: "https://random-image-pepebigotes.vercel.app/api/random-image",
    }
  ];


  // console.log(postList.map((item, index) => {
  //   return index
  // }))


  return (
    <ScrollView>



      {/* <Post title={"Hi"} describe={"hello"} image={"okok"}/>
      <Post title={"Hi"} describe={"hello"} image={"okok"}/>
      <Post title={"Hi"} describe={"hello"} image={"okok"}/> */}
      {/* {
        postList.map((item, index) => {
          return <Post title={item.title} describe={item.describe} image={item.image}/>
        })
      } */}

{
  postList.map((item, index) => {
    return <Post postInformation={item}/>
  })
}



    </ScrollView>
  );
};

export default PostScreen;
