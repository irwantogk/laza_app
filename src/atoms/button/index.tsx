import { Pressable, Text, View } from "react-native";
import { styles } from "./index.style";
import TextAtom from "../text";

export default function Button({
  title,
  action,
  color,
}: {
  title: string;
  action: any;
  color: string;
}) {
  return (
    <View>
      <Pressable
        onPress={action}
        style={{ ...styles.button, backgroundColor: color }}
      >
        <TextAtom title={title} isBold={true} size={24}>
          {title}
        </TextAtom>
      </Pressable>
    </View>
  );
}
