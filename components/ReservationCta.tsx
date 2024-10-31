import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function ReservationCta() {
  const router = useRouter();

  const handlePress = () => {
    try {
      router.push("/booking");
    } catch (error) {
      Alert.alert("Error", "Failed to navigate to booking page");
    }
  };

  return (
    <>
      <View className="px-3">
        <Text className="text-white text-3xl font-bold text-center">
          Reserva tu viaje, haz tu Check-in y que el viaje comience
        </Text>
      </View>

      <View className="px-4 py-6">
        <TouchableOpacity
          onPress={handlePress}
          className="py-2 w-full bg-aeropurple rounded-lg items-center"
          accessibilityLabel="Ver oferta de viajes"
          accessibilityRole="button"
        >
          <Text className="text-white font-bold text-lg">
            Ver oferta de viajes
          </Text>
        </TouchableOpacity>
      </View>

      <View className="px-4 py-6">
        <Text className="text-white font-bold text-2xl">
          Beneficios AeroTest rewards
        </Text>
      </View>
    </>
  );
}
