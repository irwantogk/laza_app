import { Colors } from "@/constants/colors";
import Button from "@/src/atoms/button";
import TextAtom from "@/src/atoms/text";
import Card from "@/src/molecules/card";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Greet() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/greet.png")}
        style={styles.imgBackground}
      ></ImageBackground>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
        }}
      >
        <Card>
          <View
            style={{
              marginHorizontal: 15,
              paddingVertical: 15,
            }}
          >
            <TextAtom
              title="Looks good, feel good"
              isBold={true}
              size={25}
              isCenter={true}
            />
            <TextAtom
              title="Create your individual & unique style and look amazing everyday"
              isBold={false}
              size={15}
              isCenter={true}
              colorProp="gray"
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  marginRight: 2,
                }}
              >
                <Button
                  title="Woman"
                  color={Colors.gray}
                  action={() => console.log("Button Pressed")}
                />
              </View>

              <View
                style={{
                  flex: 1,
                  marginLeft: 2,
                }}
              >
                <Button
                  title="Man"
                  color={Colors.blue}
                  action={() => console.log("Button Pressed")}
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: 20,
              }}
            >
              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 17,
                    color: Colors.gray,
                  }}
                >
                  Skip
                </Text>
              </Pressable>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    backgroundColor: Colors.blue,
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
