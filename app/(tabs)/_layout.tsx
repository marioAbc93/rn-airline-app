import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";
import Icon from "@/assets/icons/logo.svg";
import UnSelectedIcon from "@/assets/icons/gray-logo.svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#020C41",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused ? "#F8026F" : "transparent",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 3,
                gap: 2,
              }}
            >
              {/*  <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              /> */}
              {focused ? <Icon /> : <UnSelectedIcon />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="travels"
        options={{
          title: "Viajes",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused ? "#F8026F" : "transparent",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 3,
              }}
            >
              <TabBarIcon
                name={focused ? "briefcase" : "briefcase-outline"}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Reserva",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused ? "#F8026F" : "transparent",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 3,
              }}
            >
              <TabBarIcon
                name={focused ? "airplane-sharp" : "airplane-outline"}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused ? "#F8026F" : "transparent",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 3,
              }}
            >
              <TabBarIcon
                name={focused ? "man" : "man-outline"}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
