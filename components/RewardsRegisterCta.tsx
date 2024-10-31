import { Alert, Text, TouchableOpacity, View } from "react-native";
import Icon from "@/assets/icons/logo.svg";
import { useRouter } from "expo-router";
export default function RewardsRegisterCta() {
  const router = useRouter();

  const handlePress = () => {
    try {
      router.push("/profile");
    } catch (error) {
      Alert.alert("Error", "Failed to navigate to booking page");
    }
  };
  return (
    <>
      <View className="p-2  flex-row  justify-between items-center gap-4 self-center ">
        <View className=" w-[50%]">
          <View className="flex-row items-center">
            <Icon />
            <Text className="text-white font-bold">AeroTest</Text>
          </View>
          <Text className="text-white uppercase text-2xl font-bold">
            rewards
          </Text>
          <Text className="text-aeroblue text-xl">
            Los Beneficios y el prestigio son solo el comienzo.
          </Text>
        </View>
        <View className="gap-2">
          <TouchableOpacity
            onPress={handlePress}
            className="p-2  bg-aeropurple  items-center"
          >
            <Text className="text-white  font-bold text-lg">Registrate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress}
            className="p-2  bg-transparent border border-white  items-center"
          >
            <Text className="text-white  font-bold text-lg">Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
