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
  colorProp?: string;
}) {
  const txtColor = colorProp ? Colors[colorProp] : Colors.black;
  return (
    <View>
      <Text
        style={{
          fontSize: size,
          fontWeight: isBold ? "bold" : "normal",
          textAlign: isCenter ? "center" : "justify",
          color: txtColor,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
