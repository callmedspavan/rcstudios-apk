import React, { useEffect, useState, createRef } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import defaultStyles from "../Config/defaultStyles";

export default function InAutoScrollBanner({ data, scrollInterval, style }) {
  const scrollBanner = createRef();
  const [activeBanner, setActiveBanner] = useState(0);

  const findActiveBanner = (event) => {
    const bannerWidth = event.nativeEvent.layoutMeasurement.width;
    const scrollOffset = event.nativeEvent.contentOffset.x;
    const activeBannerIndex = Math.floor(scrollOffset / bannerWidth);
    setActiveBanner(activeBannerIndex);
  };

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      if (activeBanner === data.length - 1) {
        scrollBanner.current.scrollToOffset(0);
        setActiveBanner(0);
      } else {
        scrollBanner.current.scrollToOffset({
          offset: (activeBanner + 1) * wp(90), // check this wp() value
        });
      }
    }, 1000 * scrollInterval);
    return () => {
      clearInterval(bannerTimer);
    };
  });

  return (
    <View style={[styles.bannerContainer, style]}>
      <FlatList
        ref={scrollBanner}
        style={styles.scroll}
        onMomentumScrollEnd={(event) => findActiveBanner(event)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback>
              <Image
                source={{ uri: item.image }}
                style={styles.banner}
                resizeMode="cover"
              />
            </TouchableWithoutFeedback>
          );
        }}
      />
      {!(data.length === 1) && (
        <View style={styles.indicatorContainer}>
          {data.map((item, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === activeBanner
                  ? { backgroundColor: "#fff", width: wp(4), height: wp(1.4) }
                  : null,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: wp(90),
    borderWidth: wp(0.1),
    borderColor: defaultStyles.colors.light,
    borderRadius: 15,
    marginTop: hp(2),
    overflow: "hidden",
  },
  scroll: {
    width: "100%",
    height: hp(22),
  },
  banner: {
    width: wp(89.9),
    height: "100%",
  },
  indicatorContainer: {
    position: "absolute",
    bottom: hp(1.5),
    height: hp(1.5),
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: wp(1.9),
    height: wp(1.9),
    borderRadius: wp(1),
    margin: wp(1.4),
    backgroundColor: "rgba(255, 255, 255, 0.300)",
  },
});
