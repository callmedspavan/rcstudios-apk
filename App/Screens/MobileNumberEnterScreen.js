import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as yup from "yup";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import routeName from "../Config/navigationRouteNames";

import AppScreen from "../Components/AppScreen";
import AppText from "../Components/AppText";
import AppForm from "../Components/formComponents/AppForm";
import AppFormField from "../Components/formComponents/AppFormField";
import AppFormSubmitButton from "../Components/formComponents/AppFormSubmitButton";
import defaultStyles from "../Config/defaultStyles";

import loginApi from "../api/loginApi";

const MobileNumberEnterScreen = ({ navigation }) => {
  const Schema = yup.object().shape({
    phoneNumber: yup
      .string()
      .required()
      .min(10)
      .matches(/^[6-9]{1}[0-9]{9}$/),
  });

  const handleSubmit = async (values) => {
    const response = await loginApi.sendOtp(values);

    if (!response.ok) {
      console.log(response.data);
    } else {
      navigation.navigate(routeName.MOBILE_OTP_ENTER_SCREEN, {
        phoneNumber: values.phoneNumber,
      });
    }
  };

  return (
    <AppScreen>
      <View style={styles.screen}>
        <Image
          source={require("../Assets/logo-dark.png")}
          resizeMode={"contain"}
          style={styles.logo}
        />
        <AppText style={styles.heading}>Enter your mobile number</AppText>
        <View style={styles.headingUnder} />

        <AppForm
          initialValues={{ phoneNumber: "" }}
          validationSchema={Schema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <AppFormField
            name="phoneNumber"
            startText="+91"
            placeholder="10 digit mobile number"
            preCheck={true}
            keyboardType="number-pad"
            maxLength={10}
          />
          <AppFormSubmitButton style={styles.button} title="Send OTP" />
        </AppForm>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp(7),
  },
  logo: {
    height: wp(20),
    marginTop: hp(2),
    width: wp(20),
  },
  heading: {
    color: defaultStyles.colors.black,
    fontWeight: "500",
    letterSpacing: 1.5,
    marginTop: hp(3.5),
  },
  headingUnder: {
    height: hp(0.8),
    width: wp(9),
    backgroundColor: defaultStyles.colors.primary,
    marginTop: hp(1),
    borderRadius: 4,
    marginBottom: hp(4),
  },
  button: {
    bottom: hp(2),
    left: wp(7),
    position: "absolute",
  },
});

export default MobileNumberEnterScreen;
