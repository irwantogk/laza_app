import { Colors } from "@/constants/colors";
import { Icons } from "@/constants/icons";
import Button from "@/src/atoms/button";
import ButtonWithIcon from "@/src/molecules/buttonWitIcon";
import Register from "@/src/templates/register";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View } from "react-native";

export default function Index() {
  const icon = (
    <AntDesign name="home" size={Icons.size.sm} color={Colors.dark3} />
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Register />
    </View>
  );
}
