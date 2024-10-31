import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor?: { dark: string; light: string };
}>;

export default function ParallaxScrollView({ children, headerImage }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <View className="bg-aerobg flex-1">
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <View style={[styles.header]}>{headerImage}</View>
        <View className="bg-aerobg flex-1 px-4 pt-4">{children}</View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    overflow: "hidden",
  },
});
