import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";
import { benefits } from "@/constants/dummy";

export default function BenefitsList() {
  return (
    <>
      {benefits.map((item, index) => (
        <View
          key={`benefit-${index}`}
          className="w-[90%] self-center"
          testID="benefit-item"
        >
          <View className="flex flex-row items-center gap-4 px-4 py-6">
            <Ionicons
              name={item.icon}
              size={24}
              color="#35D8D5"
              testID="benefit-icon"
            />
            <Text
              className="text-white font-extralight text-left text-xl flex-1"
              testID="benefit-text"
            >
              {item.text}
            </Text>
          </View>

          {index < benefits.length - 1 && (
            <View
              className="w-[90%] border-b border-white opacity-50 self-center"
              testID="divider"
            />
          )}
        </View>
      ))}
    </>
  );
}
