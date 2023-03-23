import React from "react";
import {
  FlatList,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Octicons, Ionicons } from "@expo/vector-icons";

import AppScreen from "../Components/AppScreen";
import AppTouchIcon from "../Components/AppTouchIcon";
import AppText from "../Components/AppText";
import defaultStyles from "../Config/defaultStyles";

const data = [
  {
    id: 1,
    title: "Rahul weds Rani wedding",
    total: 1980,
    selected: 923,
    thumbnail:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Findianweddingbuzz.com%2Fdrive%2Fuploads%2F2016%2F04%2F029_IMG_8256-copy.jpg&f=1&nofb=1&ipt=2669608d9d546735fd694aee37e5c6da467a7d9b80151d11a5ad0dbc9e1fdfb8&ipo=images",
  },
  {
    id: 2,
    title: "Sriram Birthday",
    total: 800,
    selected: 0,
    thumbnail:
      "https://www.mementoofshades.com/webadmin/images/Seerat%20(137).jpg",
  },
  {
    id: 3,
    title: "Sruthi Voni Function",
    total: 3590,
    selected: 280,
    thumbnail:
      "https://1.bp.blogspot.com/-s-iX7M11A4A/WgPvg8v9oUI/AAAAAAAAFEs/qcgYLwrSWwk3Ttcj1RwXKkYX1gZBgbKcwCLcBGAs/s1600/b3069554b872f6cdfe07714dc22e46f9.jpg",
  },
];

export default function AlbumsScreen() {
  return (
    <AppScreen>
      <View style={styles.screen}>
        <View style={styles.head}>
          <AppTouchIcon name="keyboard-backspace" style={styles.backIcon} />
          <AppText style={styles.headText}>Albums</AppText>
        </View>
        <AppText style={styles.title}>Albums in your Bag - {5}</AppText>

        <View style={styles.albums}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
            }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log("clicked")}
              >
                <ImageBackground
                  source={{
                    uri: item.thumbnail,
                  }}
                  resizeMode="cover"
                  style={styles.thumbnail}
                >
                  <View style={styles.contentContainer}>
                    <AppText numberOfLines={1} style={styles.imgTitle}>
                      {item.title}
                    </AppText>
                    <View style={styles.imgFoot}>
                      <View style={styles.imgFootSub}>
                        <Octicons
                          name="file-directory"
                          style={styles.footIcon}
                        />
                        <AppText style={styles.footText}>{item.total}</AppText>
                      </View>
                      <View style={styles.imgFootSub}>
                        <Octicons name="bookmark" style={styles.footIcon} />
                        <AppText style={styles.footText}>
                          {item.selected}
                        </AppText>
                      </View>
                      <View style={styles.imgFootSub}>
                        <Octicons
                          name="bookmark-slash"
                          style={styles.footIcon}
                        />
                        <AppText style={styles.footText}>
                          {item.total - item.selected}
                        </AppText>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  head: {
    width: "100%",
    marginTop: hp(1),
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    margin: wp(2),
    fontSize: 35,
  },
  headText: {
    fontSize: 15,
    marginLeft: wp(27),
  },
  //   Body Style
  title: {
    fontSize: 17,
    margin: wp(4),
    marginBottom: hp(5),
  },
  albums: {
    flex: 1,
  },
  thumbnail: {
    marginBottom: hp(3),
    width: wp(85),
    height: hp(20),
    borderRadius: wp(5),
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  contentContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.150)",
    justifyContent: "space-around",
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
  imgFootSub: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footIcon: {
    color: defaultStyles.colors.white,
    fontSize: 16,
  },
  footText: {
    marginHorizontal: wp(2),
    fontSize: 14,
    color: defaultStyles.colors.white,
  },
});
