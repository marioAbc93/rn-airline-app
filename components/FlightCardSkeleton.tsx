import { View } from "react-native";

export default function FlightCardSkeleton() {
  return (
    <View className="p-4 border-b my-2 border-gray-700 animate-pulse mb-2">
      <View className="flex-row py-2 items-center justify-between">
        <View className="h-4 w-1/3 bg-gray-500 animate-pulse rounded" />
        <View className="h-4 w-1/4 bg-gray-500 animate-pulse rounded" />
      </View>

      <View className="flex-row justify-between items-center mt-4">
        <View className="h-6 w-1/3 bg-gray-500 animate-pulse rounded" />
        <View className="h-4 w-1/4 bg-gray-500 animate-pulse rounded" />
        <View className="h-6 w-1/3 bg-gray-500 animate-pulse rounded" />
      </View>

      <View className="flex-row py-4 justify-between items-center">
        <View className="flex items-center gap-2">
          <View className="h-4 w-20 bg-gray-500 animate-pulse rounded mb-2" />
          <View className="h-4 w-20 bg-gray-500 animate-pulse rounded" />
        </View>
        <View className="h-6 w-1/4 bg-gray-500 animate-pulse rounded" />
      </View>
    </View>
  );
}
