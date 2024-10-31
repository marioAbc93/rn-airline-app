import { View } from "react-native";

export default function Divider() {
  return (
    <View
      className="h-[1px] w-[80%] bg-white block opacity-50 my-4 self-center"
      testID="divider"
    />
  );
}
