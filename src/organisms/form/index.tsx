import Button from "@/src/atoms/button";
import Input from "@/src/atoms/input";
import { View } from "react-native";

export default function Form() {
  return (
    <View>
      <Input title="Email address" />
      <Button title="Send" action={() => console.log("Button Pressed!")} />
    </View>
  );
}
