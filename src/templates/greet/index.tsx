import { Image, ScrollView, View } from "react-native";
import { styles } from "./index.style";
import Card from "@/src/molecules/card";
import Button from "@/src/atoms/button";
import { Colors } from "@/constants/colors";

export default function Greet() {
  return (
    // <ScrollView>
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/images/greet.png")}
        style={styles.image}
      />
      <View
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          justifyContent: "center",
          backgroundColor: "red",
          padding: 20,
        }}
      >
        <Card>
          <Button
            title="woman"
            action={() => console.log("Hello card!")}
            color={Colors.gray}
          />
        </Card>
      </View>
    </View>
    // </ScrollView>
  );
}
