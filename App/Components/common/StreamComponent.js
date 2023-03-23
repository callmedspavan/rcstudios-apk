import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Octicons, Ionicons } from "@expo/vector-icons";
import defaultStyles from "../../Config/defaultStyles";
import AppText from "../AppText";

export default function StreamComponent({
  date,
  month,
  title,
  category,
  time,
  thumbnail,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>
        <AppText style={styles.titleText}>{date}</AppText>
        <AppText style={styles.subText}>{month}</AppText>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View style={styles.right}>
        <ImageBackground
          source={{
            uri: thumbnail,
          }}
          resizeMode="cover"
          style={styles.thumbnail}
        >
          <View style={styles.contentContainer}>
            <AppText numberOfLines={1} style={styles.imgTitle}>
              {title}
            </AppText>
            <View style={styles.imgFoot}>
              <View style={styles.imgFootLeft}>
                <Octicons name="verified" style={styles.categoryIcon} />
                <AppText style={styles.category}>{category}</AppText>
              </View>
              <View style={styles.imgFootRight}>
                <Ionicons name="time" style={styles.timeIcon} />
                <AppText style={styles.time}>{time}</AppText>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: hp(22),
    flexDirection: "row",
    marginBottom: hp(1),
  },
  left: {
    width: wp(16),
    height: "100%",
    alignItems: "center",
    marginRight: wp(3),
  },
  titleText: {
    fontSize: 17,
    color: defaultStyles.colors.primary,
    fontWeight: "600",
    letterSpacing: 1,
  },
  subText: {
    fontSize: 17,
    letterSpacing: 1,
    fontWeight: "600",
    marginBottom: hp(0.8),
  },
  dot: {
    width: wp(1.2),
    height: wp(1.2),
    borderRadius: wp(1),
    marginVertical: hp(0.6),
    backgroundColor: defaultStyles.colors.medium,
  },
  right: {
    flex: 1,
  },
  thumbnail: {
    width: "100%",
    height: hp(18),
    borderRadius: wp(5),
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  contentContainer: {
    width: "100%",
    height: "47%",
    backgroundColor: "rgba(0, 0, 0, 0.150)",
    padding: wp(3),
  },
  imgTitle: {
    color: defaultStyles.colors.white,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: 17,
    flexWrap: "nowrap",
    flex: 1,
  },
  imgFoot: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgFootLeft: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  categoryIcon: {
    color: defaultStyles.colors.white,
    fontSize: 16,
  },
  category: {
    marginHorizontal: wp(2),
    fontSize: 14,
    color: defaultStyles.colors.white,
  },
  imgFootRight: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  timeIcon: {
    color: defaultStyles.colors.white,
    fontSize: 18,
  },
  time: {
    marginHorizontal: wp(2),
    fontSize: 14,
    color: defaultStyles.colors.white,
  },
});
