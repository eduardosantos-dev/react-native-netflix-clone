import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./styles/colors";
import Home from "./pages/Home";
import { Foundation } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "roboto_400",
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.gray,
        activeTintColor: colors.black,
      }}>
      <Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="home"
                size={size}
                color={focused ? colors.black : colors.gray}
              />
            );
          },
        }}
      />

      <Screen
        name="Em breve"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="play-box-multiple-outline"
                size={size}
                color={focused ? colors.black : colors.gray}
              />
            );
          },
        }}
      />

      <Screen
        name="Downloads"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="download-circle-outline"
                size={size}
                color={focused ? colors.black : colors.gray}
              />
            );
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
