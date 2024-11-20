import { Pressable, Text, View } from "react-native";
import { styles } from "./index.style";
import TextAtom from "../text/text";

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
        <TextAtom title="Woman" size={24} isBold={true}>
          {title}
        </TextAtom>
      </Pressable>
    </View>
  );
}
