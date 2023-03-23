import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import YoutubePlayer from "react-native-youtube-iframe";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import AppScreen from "../Components/AppScreen";
import AppText from "../Components/AppText";
import defaultStyles from "../Config/defaultStyles";

export default function StreamViewScreen() {
  return (
    <AppScreen>
      <View style={styles.screen}>
        <View style={styles.branding}>
          <Image
            style={styles.logo}
            source={require("../Assets/logo.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.player}>
          <YoutubePlayer
            contentScale={0.9}
            width={"100%"}
            height={"100%"}
            videoId={"r6gA42T0Cas"}
            play={true}
            playList={["r6gA42T0Cas", "", "", "", ""]}
            style={{ backgroundColor: "#000" }}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.detailContainer}>
            <View style={styles.detail}>
              <FontAwesome5 name="bookmark" style={styles.detailIcon} />
              <AppText style={styles.detailText}>Sitara weds Rocky </AppText>
            </View>
            <View style={styles.detail}>
              <MaterialIcons name="category" style={styles.detailIcon} />
              <AppText style={styles.detailText}>Wedding</AppText>
            </View>
            <View style={styles.detail}>
              <FontAwesome5 name="calendar-day" style={styles.detailIcon} />
              <AppText style={styles.detailText}>12/08/2022</AppText>
            </View>
            <View style={styles.detail}>
              <FontAwesome5 name="building" style={styles.detailIcon} />
              <AppText style={styles.detailText}>
                Subhamasthu Ganni's Function Hall
              </AppText>
            </View>
            <View style={styles.detail}>
              <FontAwesome5 name="map" style={styles.detailIcon} />
              <AppText style={styles.detailText}>
                Near Indian Oil Petrol Pump, RTC Complex Road, Morampudi
                Rajahmundry.
              </AppText>
            </View>
          </View>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <AppText style={{ fontSize: 17 }}>Our Portofolio</AppText>
            <FontAwesome5
              name="long-arrow-alt-right"
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  player: {
    width: wp(100),
    height: hp(30),
    alignItems: "center",
  },
  branding: {
    width: wp(150),
    height: wp(150),
    borderRadius: wp(100),
    backgroundColor: defaultStyles.colors.primary,
    position: "absolute",
    right: wp(-24.5),
    top: wp(-70.5),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: wp(18),
    height: wp(18),
  },
  bottomContainer: {
    height: hp(56),
    marginTop: hp(9),
    borderWidth: wp(0.6),
    borderStyle: "dashed",
    borderColor: defaultStyles.colors.white,
    width: wp(100),
    borderTopRightRadius: wp(100),
    borderTopLeftRadius: wp(100),
    backgroundColor: defaultStyles.colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    width: wp(100),
    alignItems: "center",
    justifyContent: "center",
  },
  detail: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(1.5),
  },
  detailIcon: {
    fontSize: 20,
    color: defaultStyles.colors.white,
    width: wp(12),
  },
  detailText: {
    fontSize: 13,
    color: defaultStyles.colors.white,
  },
  button: {
    width: "60%",
    height: hp(6),
    backgroundColor: defaultStyles.colors.white,
    marginTop: hp(3),
    borderRadius: wp(10),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonIcon: {
    fontSize: 20,
    color: defaultStyles.colors.black,
    width: wp(12),
  },
});
