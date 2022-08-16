import React from "react";
import myStyle from "./style";
import { Image, Text, View } from "react-native";

function Movie(props) {
  return (
    <View style={myStyle.container}>
      <View>
        <Image style={myStyle.image} source={{ uri: props.filmImage }} />
        <Text style={myStyle.title}>{props.title}</Text>
      </View>
    </View>
  );
}
export default Movie;
