import { Colors } from "@/constants/colors";
import TextAtom from "@/src/atoms/text";
import ButtonWithIcon from "@/src/molecules/buttonWitIcon";
import { StyleSheet, Text, View } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import Gap from "@/src/atoms/gap";
import { Fonts } from "@/constants/fonts";

const iconFb = <EvilIcons name="sc-facebook" size={24} color={Colors.white} />;
const iconTwitter = (
  <EvilIcons name="sc-twitter" size={24} color={Colors.white} />
);
const iconGoogle = (
  <Ionicons name="logo-google" size={20} color={Colors.white} />
);

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={{ marginTop: 15 }}>
          <TextAtom
            title="Let's Get Started"
            isBold={true}
            size={28}
            isCenter={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonWithIcon
            icon={iconFb}
            title="Facebook"
            btnColor={Colors.oldBlue}
            paddingX={0}
            paddingY={14}
            action={() => console.log("Login with facebook")}
          />

          <Gap sizeX={0} sizeY={10} />

          <ButtonWithIcon
            icon={iconTwitter}
            title="Twitter"
            btnColor={Colors.blue}
            paddingX={0}
            paddingY={14}
            action={() => console.log("Login with facebook")}
          />

          <Gap sizeX={0} sizeY={10} />

          <ButtonWithIcon
            icon={iconGoogle}
            title="Google"
            btnColor={Colors.orange2}
            paddingX={0}
            paddingY={14}
            action={() => console.log("Login with google")}
          />
        </View>
        <View
          style={{
            marginBottom: 25,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{ fontSize: 15, color: Colors.gray, textAlign: "center" }}
          >
            Already have an account?{" "}
            <Link href="/signin">
              <Text style={{ color: Colors.black }}>Login</Text>
            </Link>
          </Text>
        </View>
      </View>

      <View style={styles.bottomView}>
        <Link href="/register" style={styles.buttomLink}>
          <Text>Create an account</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    flex: 9,
    backgroundColor: Colors.white,
    justifyContent: "space-between",
  },
  bottomView: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
  buttomLink: {
    textAlign: "center",
    fontSize: Fonts.size.text.txt17,
    fontWeight: 400,
    paddingTop: 15,
    paddingBottom: 15,
    color: Colors.white,
  },
});
