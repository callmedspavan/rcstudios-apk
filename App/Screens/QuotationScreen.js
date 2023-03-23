import { StyleSheet, Image, View } from "react-native";
import React from "react";

import AppScreen from "../Components/AppScreen";
import AppTouchIcon from "../Components/AppTouchIcon";

import defaultStyles from "../Config/defaultStyles";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";

export default function QuotationScreen() {
  return (
    <AppScreen>
      <AppTouchIcon name="keyboard-backspace" style={styles.backIcon} />
      <View style={styles.screen}>
        <Image
          style={styles.image}
          source={require("../Assets/soon.webp")}
          resizeMode={"cover"}
        />
        <AppText style={styles.text}>
          This screen is still under production since our developer is too lazy,
          please check back later...
        </AppText>
        <AppButton title={"Home"} style={styles.button} />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: wp(8),
  },
  backIcon: {
    position: "absolute",
    top: hp(3),
    left: wp(10),
    margin: wp(2),
    fontSize: 35,
  },
  image: {
    width: wp(90),
    height: wp(90),
    borderRadius: wp(5),
    marginTop: hp(5),
  },
  text: {
    fontSize: 18,
    marginVertical: hp(5),
    lineHeight: hp(3.5),
    letterSpacing: wp(0.1),
  },
});
