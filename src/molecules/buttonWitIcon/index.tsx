import { Pressable, StyleSheet, Text, View } from "react-native";
import { styles } from "./index.style";
import { Colors } from "@/constants/colors";
import { Icons } from "@/constants/icons";
import { Fonts } from "@/constants/fonts";

export default function ButtonWithIcon({
  icon,
  title,
  action,
  btnColor,
  paddingX,
  paddingY,
}: {
  icon: any;
  title: string;
  action: any;
  btnColor: string;
  paddingX: number;
  paddingY: number;
}) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={action}
        style={{
          ...styles.button,
          backgroundColor: btnColor,
          paddingVertical: paddingY || 0,
          paddingHorizontal: paddingX || 0,
        }}
      >
        {icon}
        <Text style={stylesBtn.btnText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const stylesBtn = StyleSheet.create({
  btnText: {
    marginLeft: 10,
    fontSize: Fonts.size.text.txt17,
    color: Colors.white,
  },
});
