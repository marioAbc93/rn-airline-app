import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
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
                borderTopColor: focused ? "aerored" : "transparent",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 3,
              }}
            >
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Viajes",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused
                  ? Colors[colorScheme ?? "light"].tint
                  : "transparent",
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
        name="probanding"
        options={{
          title: "Reserva",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused
                  ? Colors[colorScheme ?? "light"].tint
                  : "transparent",
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
                borderTopColor: focused
                  ? Colors[colorScheme ?? "light"].tint
                  : "transparent",
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
