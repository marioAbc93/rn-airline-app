import { View, Text, SafeAreaView, StatusBar, FlatList } from "react-native";
import { FetchFlights } from "@/services";
import { useState, useEffect } from "react";
import { Result } from "@/constants/Types";
import FlightCard from "@/components/FlightCard";
import FlightCardSkeleton from "@/components/FlightCardSkeleton";

export default function Probanding() {
  const [data, setData] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const flightData = await FetchFlights();
        setData(flightData);
      } catch (error) {
        console.error("Error fetching flights:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="bg-aerobg flex-1">
        <Text className="text-white text-center text-2xl mt-4">
          Vuelos Bogotá - Medellín
        </Text>

        <View className="flex items-center h-full">
          {loading ? (
            <FlatList
              data={Array(5).fill({})}
              keyExtractor={(_, index) => `skeleton-${index}`}
              renderItem={() => <FlightCardSkeleton />}
              contentContainerStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                flexGrow: 1,
              }}
            />
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item, index) => item.id || index.toString()}
              renderItem={({ item }) => <FlightCard item={item} />}
              contentContainerStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                flexGrow: 1,
              }}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
}
