import { Text, View } from "react-native";
import { Result } from "@/constants/Types";
import Icon from "@/assets/icons/logo.svg";

export default function FlightCard({ item }: { item: Result }) {
  return (
    <View className="w-full p-4 border-b border-gray-700 mb-2">
      <View className="flex-row py-2 items-center justify-between">
        <Text className="text-white w-1/3">
          {item.content.outboundLeg.localDepartureDateLabel}
        </Text>
        <Text className="text-aerobg text-xs font-bold p-2 bg-aeroblue rounded-lg w-max text-center">
          ¡Asientos disponibles!
        </Text>
      </View>

      <View className="flex-row justify-around w-full items-center mt-4">
        <Text className="text-white font-semibold text-xl ">
          {item.content.outboundLeg.originAirport.name}
        </Text>
        <Text className="text-white font-extralight text-md  text-center">
          {item.content.direct ? "Sin escalas" : "Tiene conexiones"}
        </Text>
        <Text className="text-white font-semibold text-xl ">
          {item.content.outboundLeg.destinationAirport.name}
        </Text>
      </View>
      <View className="flex-row py-4 justify-between items-center">
        <View className="flex items-center gap-2 w-1/4">
          <Text className="text-white text-xs">Operado por:</Text>
          <View className="flex-row items-center">
            <Icon testID="logo-icon" />

            <Text className="text-white font-bold ml-2">AeroTest</Text>
          </View>
        </View>
        <Text className="text-white font-semibold text-xl w-1/3 text-right">
          {item.content.price}
        </Text>
      </View>
    </View>
  );
}
