import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Upcomming from "@/components/Upcomming";
import Latest from "@/components/Latest";

export default function Travels() {
  const [activeTab, setActiveTab] = useState("Upcomming");
  const router = useRouter();

  const handlePress = () => {
    router.push("/booking");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1 bg-aerobg">
        <View className="px-6 flex-row items-center justify-between">
          <Text className="text-white font-bold text-3xl">Mis viajes</Text>
          <TouchableOpacity
            onPress={handlePress}
            className="flex-row items-center gap-2"
          >
            <Text className="text-white text-lg">Agregar viaje</Text>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 px-6">
          <View className="flex-row border border-transparent border-b-grayBorder">
            <TouchableOpacity
              className={`flex-1 py-4 ${
                activeTab === "Upcomming" ? "border-b border-white" : ""
              }`}
              onPress={() => setActiveTab("Upcomming")}
            >
              <Text
                className={`text-center text-lg font-semibold ${
                  activeTab === "Upcomming" ? " text-white" : "text-gray-600"
                }`}
              >
                Próximos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-4 ${
                activeTab === "Latest" ? "border-b border-white" : ""
              }`}
              onPress={() => setActiveTab("Latest")}
            >
              <Text
                className={`text-center text-lg font-semibold ${
                  activeTab === "Latest" ? "text-white" : "text-gray-600"
                }`}
              >
                Pasados
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-1">
            {activeTab === "Upcomming" ? <Upcomming /> : <Latest />}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
