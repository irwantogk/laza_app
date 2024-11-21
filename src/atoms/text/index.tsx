import { Colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function TextAtom({
  title,
  isBold,
  size,
  isCenter,
  colorProp,
}: {
  title: string;
  isBold: boolean;
  size: number;
  isCenter: boolean;
  colorProp?: any;
}) {
  return (
    <View>
      <Text
        style={{
          fontSize: size,
          fontWeight: isBold ? "bold" : "normal",
          textAlign: isCenter ? "center" : "justify",
          color: colorProp ? Colors[colorProp] : Colors.black,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     fontSize: size,
//     fontWeight: isBold ? "bold" : "normal",
//   },
// });
