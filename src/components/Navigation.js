import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import { Image, View } from "react-native";
import { useDispatch } from "react-redux";
import TopMovies from "../screens/TopMovies";
import myStyle from "./style";
import BlackList from "../screens/BlackList";

const Tab = createBottomTabNavigator();

function Navigation(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const screenOptionStyle = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      backgroundColor: "#d7d6d6",
      height: 70,
      shadowOffset: {
        width: 1,
        height: 1,
        shadowColor: "red",
      },
      shadowRadius: 1,
    },
  };

  return (

    <View style={{ flex: 1 }}>
      <View style={myStyle.header}>
        <Image source={require("../assets/Images/BatmenWallpaper.jpg")} style={myStyle.wallpaper} />
      </View>

      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptionStyle}>

          <Tab.Screen name="TopMovies" component={TopMovies}
                      options={{
                        tabBarIcon: ({ focused }) => <Image style={myStyle.logo}
                                                            source={focused ? require("../assets/Images/TopActive.png") : require("../assets/Images/Top.png")} />,
                      }} />
          <Tab.Screen name="Main" component={Main}
                      options={{
                        tabBarIcon: ({ focused }) => <Image style={myStyle.logo}
                                                            source={focused ? require("../assets/Images/HeartIconActive.png") : require("../assets/Images/HeartIcon.png")} />,
                      }} />

          <Tab.Screen name="Blacklist" component={BlackList}
                      options={{
                        tabBarIcon: ({ focused }) => <Image style={myStyle.logo}
                                                            source={focused ? require("../assets/Images/BlackListActive.png") : require("../assets/Images/BlackList.png")} />,
                      }} />

        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Navigation;
