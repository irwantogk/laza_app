import { StyleSheet, Text, View } from "react-native";

export default function TextAtom({
  title,
  isBold,
  size,
}: {
  title: string;
  isBold: boolean;
  size: number;
}) {
  return (
    <View>
      <Text style={{ fontSize: size, fontWeight: isBold ? "bold" : "normal" }}>
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
