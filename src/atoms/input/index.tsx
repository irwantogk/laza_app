import { TextInput, View } from "react-native";

export default function Input({ title }: { title: string }) {
  return (
    <View>
      <TextInput placeholder={title} />
    </View>
  );
}
