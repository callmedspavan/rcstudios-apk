import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import AppErrorIcon from "./AppErrorIcon";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function AppFormField({
  name,
  preCheck,
  style,
  startText,
  startIcon,
  ...otherProps
}) {
  const { handleBlur, handleChange, errors, values, touched } =
    useFormikContext();
  return (
    <View style={style}>
      {preCheck
        ? touched[name] && (
            <AppErrorIcon
              name={errors[name] ? "error-outline" : "check"}
              errors={errors[name]}
              style={styles.icon}
            />
          )
        : touched[name] &&
          errors[name] && (
            <AppErrorIcon
              name="error-outline"
              errors={errors[name]}
              style={styles.icon}
            />
          )}
      <AppTextInput
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        startIcon={startIcon}
        startText={startText}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: hp(-1),
    right: wp(5),
  },
});
