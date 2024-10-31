import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import Divider from "./Divider";

export default function LoginForm() {
  const [number, onChangeNumber] = useState("");
  const [password, onChangePassword] = useState("");

  const handleLoginPress = () => {
    Alert.alert(
      "Funcionalidad no disponible",
      "Esta funcionalidad está en desarrollo."
    );
  };

  return (
    <>
      <View className="px-8 py-10 gap-2">
        <Text className="text-white text-3xl font-semibold">
          Inicia sesión con tu número AeroTest Rewards
        </Text>
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          className="p-4 text-white border border-white"
          placeholder="Número AeroTest Rewards"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          keyboardType="numeric"
        />
      </View>
      <View className="p-6 gap-2">
        <Text className="text-white text-3xl font-semibold">Contraseña</Text>
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          className="p-4 text-white border border-white"
          placeholder="Contraseña"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          secureTextEntry
        />
      </View>
      <Divider />
      <View className="px-8 py-4">
        <TouchableOpacity
          onPress={handleLoginPress}
          className="bg-aeroblue py-4 rounded-lg items-center"
        >
          <Text className="text-aerobg text-lg font-bold">Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
