import { Pressable, StyleSheet, Text, View } from "react-native";
import { styles } from "./index.style";
import { Colors } from "@/constants/colors";
import { Icons } from "@/constants/icons";
import { Fonts } from "@/constants/fonts";

export default function ButtonWithIcon({
  icon,
  title,
  action,
}: {
  icon: any;
  title: string;
  action: any;
}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={action} style={styles.button}>
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
