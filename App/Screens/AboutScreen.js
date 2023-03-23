import { StyleSheet, Image, View, Platform } from "react-native";
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
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AboutScreen() {
  return (
    <AppScreen style={{ backgroundColor: defaultStyles.colors.shaded_white }}>
      <AppTouchIcon name="keyboard-backspace" style={styles.backIcon} />
      <AppTouchIcon name="power" style={styles.logoutIcon} />
      <View style={styles.topPart}>
        <Image
          source={require("../Assets/profile.png")}
          style={{
            marginLeft: wp(10),
            width: wp(45),
            height: wp(45),
            marginVertical: hp(4),
          }}
          resizeMode={"contain"}
        />
        <AppText style={styles.Title}>Hello! Lokesh</AppText>
      </View>
      <View style={styles.bottomPart}>
        <Image
          source={require("../Assets/logo-dark.png")}
          style={{
            marginLeft: wp(5),
            width: wp(15),
            height: wp(15),
            marginTop: hp(2.5),
          }}
          resizeMode={"contain"}
        />
        <TouchableOpacity style={styles.row}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.dot} />
            <AppText style={styles.rowTitle}>
              Chat With Photography Expert
            </AppText>
          </View>
          <AppTouchIcon name="chevron-right" style={styles.rowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.dot} />
            <AppText style={styles.rowTitle}>Change Phone Number</AppText>
          </View>
          <AppTouchIcon name="chevron-right" style={styles.rowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.dot} />
            <AppText style={styles.rowTitle}>Make Review</AppText>
          </View>
          <AppTouchIcon name="chevron-right" style={styles.rowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.dot} />
            <AppText style={styles.rowTitle}>About RC Studio</AppText>
          </View>
          <AppTouchIcon name="chevron-right" style={styles.rowIcon} />
        </TouchableOpacity>
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
  logoutIcon: {
    position: "absolute",
    top: hp(3),
    right: wp(10),
    margin: wp(2),
    fontSize: 35,
  },
  topPart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPart: {
    flex: 1,
    backgroundColor: defaultStyles.colors.white,
    borderTopLeftRadius: wp(18),
    borderTopRightRadius: wp(18),
    ...Platform.select({
      android: {
        elevation: 20,
      },
      ios: {},
    }),
    shadowOpacity: 0.02,
    alignItems: "center",
  },
  Title: {
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: wp(0.4),
  },
  row: {
    marginTop: hp(3.5),
    width: wp(85),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dot: {
    width: wp(2.5),
    height: wp(2.5),
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: wp(10),
  },
  rowTitle: {
    fontSize: 15.5,
    marginLeft: wp(5),
  },
  rowIcon: {
    color: defaultStyles.colors.primary,
    fontSize: 30,
  },
});
