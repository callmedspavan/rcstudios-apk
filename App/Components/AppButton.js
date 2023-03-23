import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import AppText from "./AppText";
import defaults from "../Config/defaultStyles";

export default function AppButton({ title, style, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={"#ff8087"}
      onPress={onPress}
      style={[styles.button, style]}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: hp(6),
    backgroundColor: defaults.colors.primary,
    borderRadius: wp(50),
  },
  text: {
    color: defaults.colors.white,
    fontSize: wp(4.5),
    fontWeight: "600",
  },
});
