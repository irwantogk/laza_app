import { View } from "react-native";
import { styles } from "./index.style";

export default function Card({ children }: { children: any }) {
  return <View style={styles.container}>{children}</View>;
}
