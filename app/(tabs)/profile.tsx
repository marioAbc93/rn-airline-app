import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Register from "@/components/Register";
import LoginForm from "@/components/LoginForm";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Login");

  return (
    <SafeAreaView className="flex-1 bg-aerobg">
      <View className="flex-1">
        <View className="flex-row ">
          <TouchableOpacity
            className={`flex-1 py-4 ${
              activeTab === "Login" ? "border-b border-white" : ""
            }`}
            onPress={() => setActiveTab("Login")}
          >
            <Text
              className={`text-center text-lg font-semibold ${
                activeTab === "Login" ? " text-white" : "text-gray-600"
              }`}
            >
              Iniciar de sesión
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-4 ${
              activeTab === "Register" ? "border-b border-white" : ""
            }`}
            onPress={() => setActiveTab("Register")}
          >
            <Text
              className={`text-center text-lg font-semibold ${
                activeTab === "Register" ? "text-white" : "text-gray-600"
              }`}
            >
              Inscríbete
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          {activeTab === "Login" ? <LoginForm /> : <Register />}
        </View>
      </View>
    </SafeAreaView>
  );
}
