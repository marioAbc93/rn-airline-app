import { View, Text, TouchableOpacity, Linking, Alert } from "react-native";
import Icon from "@/assets/icons/sad.svg";

export default function Register() {
  const handlePress = () => {
    const url = "https://www.linkedin.com/in/mario-barros-carrillo/";
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert(
            "Error",
            "No se puede abrir el enlace en este dispositivo"
          );
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <View className="flex-1 items-center gap-2 justify-center">
      <Icon />
      <Text className="text-2xl text-white px-4 text-center">
        Aún no podemos registrarnos desde acá, visita nuestro sitio web
      </Text>
      <TouchableOpacity
        onPress={handlePress}
        className="bg-aeroblue py-3 px-6 rounded-lg mt-4"
      >
        <Text className="text-white text-lg font-bold">Ir al sitio web</Text>
      </TouchableOpacity>
    </View>
  );
}
