import { Image, View, Text, StyleSheet, Button, StatusBar } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import BenefitsList from "@/components/BenefitsList";
import ReservationCta from "@/components/ReservationCta";
import ContactUsCta from "@/components/ContactUsCta";
import RewardsRegisterCta from "@/components/RewardsRegisterCta";
export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ParallaxScrollView
        headerImage={
          <View className="overflow-hidden w-full h-[280px] relative">
            <Image
              source={require("@/assets/images/home-img.webp")}
              className="w-full h-full"
              resizeMode="cover"
            />

            <LinearGradient
              colors={["transparent", "#020C41"]}
              style={StyleSheet.absoluteFillObject}
              start={[0, 0]}
              end={[0, 1]}
            />

            <BlurView
              intensity={0}
              className="absolute bottom-0 w-full pt-4 h-[100px] justify-center items-center"
            >
              <Text className="text-white text-3xl text-center font-extralight">
                ¡Bienvenido a AeroTest!
              </Text>
            </BlurView>
          </View>
        }
      >
        <ReservationCta />
        <BenefitsList />
        <RewardsRegisterCta />
        <ContactUsCta />
      </ParallaxScrollView>
    </>
  );
}
