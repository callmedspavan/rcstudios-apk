import React from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import defaultStyles from "../../Config/defaultStyles";

export default function AppErrorIcon({ name, errors, style }) {
  return (
    <View style={[styles.container, style]}>
      <MaterialIcons
        name={name}
        style={errors ? styles.errorIcon : styles.successIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(10),
    height: wp(5),
    backgroundColor: defaultStyles.colors.shaded_white,
    borderRadius: 3.5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  errorIcon: {
    fontSize: 17,
    color: defaultStyles.colors.primary,
  },
  successIcon: {
    fontSize: 17,
    color: defaultStyles.colors.success,
  },
});
