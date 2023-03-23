import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import AppText from "./AppText";
import defaultStyles from "../Config/defaultStyles";

export default function AppTextInput({
  style,
  startIcon,
  startText,
  endIcon,
  ...otherProps
}) {
  return (
    <View style={[styles.inputBox, style]}>
      {startIcon && <MaterialIcons name={startIcon} style={styles.startIcon} />}
      {startText && (
        <AppText style={{ fontWeight: "600" }}>{startText}</AppText>
      )}
      <TextInput
        style={[styles.input]}
        placeholderTextColor={defaultStyles.colors.light}
        selectionColor={defaultStyles.colors.primary}
        returnKeyType="done"
        {...otherProps}
      />
      {endIcon && <MaterialIcons name={endIcon} style={styles.endIcon} />}
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    borderWidth: wp(0.2),
    borderColor: defaultStyles.colors.light,
    alignItems: "center",
    height: hp(6.7),
    padding: wp(3.5),
    borderRadius: wp(4),
  },
  input: {
    flex: 1,
    marginLeft: wp(3),
    color: defaultStyles.colors.medium,
    letterSpacing: 1.2,
    fontSize: 13,
  },
  startIcon: {
    fontSize: 20,
    color: defaultStyles.colors.medium,
  },
  endIcon: {
    fontSize: 26,
    color: defaultStyles.colors.medium,
    marginRight: wp(2),
  },
});
