import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import * as yup from "yup";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import jwtDecode from "jwt-decode";

import routeName from "../Config/navigationRouteNames";
import defaultStyles from "../Config/defaultStyles";

import AppScreen from "../Components/AppScreen";
import AppText from "../Components/AppText";
import AppForm from "../Components/formComponents/AppForm";
import AppFormField from "../Components/formComponents/AppFormField";
import AppFormSubmitButton from "../Components/formComponents/AppFormSubmitButton";
import AppTouchIcon from "../Components/AppTouchIcon";

import loginApi from "../api/loginApi";

import authStorage from "../auth/storage";
import AuthContext from "../auth/context";

const MobileOtpEnterScreen = ({ navigation, route }) => {
  const [timer, setTimer] = useState("00:59");
  const [enableRequest, setEnableRequest] = useState(false);
  const [allowReset, setAllowReset] = useState(0);
  const authContext = useContext(AuthContext);

  const Schema = yup.object().shape({
    otp: yup.number().required().min(1000),
  });

  const handelBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async (values) => {
    // calling Backend
    const response = await loginApi.verifyOtp({
      ...values,
      // phoneNumber: route.params.phoneNumber,
    });

    if (!response.ok) {
    } else {
      const user = jwtDecode(response.data.access);
      authContext.setUser(user.user_id);
      authStorage.storeToken(response.data.access);
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: routeName.HOME_SCREEN }],
      // });
    }

    // navigation.navigate(routeName.EMAIL_ENTER_SCREEN);
  };

  const handleResendOtp = async () => {
    setEnableRequest(false);
    setAllowReset(allowReset ? 0 : 1);

    // calling Backend
    const response = await loginApi.sendOtp({
      // phoneNumber: route.params.phoneNumber,
    });
    if (!response.ok) {
      setEnableRequest(true);
      setAllowReset(allowReset ? 0 : 1);
    }
  };

  useEffect(() => {
    let min = 0;
    let sec = 59; //if changing this value change initial value of timer
    const timeInterval = setInterval(() => {
      if (sec > 0) {
        setTimer("0" + min + ":" + (sec > 9 ? sec : "0" + sec));
        sec -= 1;
      } else if (sec === 0) {
        if (min > 0) {
          min -= 1;
          sec = 59;
        } else if (min === 0) {
          setEnableRequest(true);
          setTimer("00:00");
          clearInterval(timeInterval);
        }
      }
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [allowReset]);

  return (
    <AppScreen>
      <View style={styles.screen}>
        <AppTouchIcon name="keyboard-backspace" onPress={handelBack} />
        <AppText style={styles.heading}>Mobile OTP Verification</AppText>
        <View style={styles.headingUnder} />

        <AppText style={styles.desc}>
          Enter 4 digit code sent to mobile number {"\n"}+91{" "}
          {/* {route.params.phoneNumber} */7569661879}
        </AppText>

        <AppForm
          initialValues={{ otp: "" }}
          validationSchema={Schema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <AppFormField
            name="otp"
            placeholder="Enter OTP send to your mobile"
            keyboardType="number-pad"
            maxLength={4}
          />

          <View style={styles.requestContainer}>
            <AppText style={styles.requestTitle}>
              Didn’t recieve the OTP?
            </AppText>
            <View style={styles.requestCounterContainer}>
              <TouchableHighlight
                underlayColor={"#fff"}
                disabled={!enableRequest}
                onPress={handleResendOtp}
              >
                <AppText
                  style={
                    enableRequest
                      ? styles.requestButtonActive
                      : styles.requestButtonInactive
                  }
                >
                  Resend OTP
                </AppText>
              </TouchableHighlight>
              <AppText
                style={[
                  styles.timer,
                  { display: enableRequest ? "none" : "flex" },
                ]}
              >
                {timer}
              </AppText>
            </View>
          </View>

          <AppFormSubmitButton style={styles.button} title="Submit" />
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
  desc: {
    fontSize: 14,
    color: defaultStyles.colors.medium,
    marginBottom: hp(4),
    lineHeight: hp(2.6),
  },
  requestContainer: {
    marginTop: hp(4),
  },
  requestTitle: {
    fontSize: 13,
    color: defaultStyles.colors.light,
  },
  requestCounterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(1.2),
  },
  requestButtonActive: {
    color: defaultStyles.colors.primary,
    fontSize: 13.5,
  },
  requestButtonInactive: {
    color: defaultStyles.colors.light,
    fontSize: 13.5,
  },
  timer: {
    fontSize: 12.5,
    color: defaultStyles.colors.primary,
    marginLeft: wp(1.5),
  },
  button: {
    bottom: hp(2),
    left: wp(7),
    position: "absolute",
  },
});

export default MobileOtpEnterScreen;
