import { View, Text } from "react-native";

export default function Probanding() {
  return (
    <>
      <View className="flex justify-center items-center h-screen bg-aerobg">
        <View>
          <Text className="font-bold text-white">Hola</Text>
        </View>
        <View>
          <Text className="bg-aeroblue">mundo</Text>
        </View>
      </View>
    </>
  );
}
