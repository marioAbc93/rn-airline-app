import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";

export default function ContactUsCta() {
  return (
    <View className="px-6 py-2 flex-row items-center justify-between">
      <View className="flex text-left flex-col gap-3 justify-between w-[90%]">
        <Text className="text-white text-2xl font-bold">
          Contactanos en cualquier momento
        </Text>
        <Text className="text-white text-lg">
          Comunícate en la plataforma más conveniente para recibir ayuda de un
          representante de AeroTest
        </Text>
      </View>
      <Ionicons
        name="arrow-forward"
        size={24}
        color="white"
        testID="arrow-icon"
      />
    </View>
  );
}
