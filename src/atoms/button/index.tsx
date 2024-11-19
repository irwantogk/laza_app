import { Pressable, Text, View } from "react-native";
import { styles } from "./index.style";

export default function Button({
  title,
  action,
}: {
  title: string;
  action: any;
}) {
  return (
    <View>
      <Pressable onPress={action} style={styles.button}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}
