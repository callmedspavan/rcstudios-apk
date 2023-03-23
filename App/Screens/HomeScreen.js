import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign, Octicons } from "@expo/vector-icons";

import AppScreen from "../Components/AppScreen";
import AppTouchIcon from "../Components/AppTouchIcon";
import AppText from "../Components/AppText";
import InAutoScrollBanner from "../Components/InAutoScrollBanner";
import defaultStyles from "../Config/defaultStyles";

import portfolioApi from "../api/portfolioApi";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1563521940479-140e6e311385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBiYWJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 2,
    image:
      "https://media.weddingz.in/images/403efe061c254a1296a4db833699da70/Marriage-Dates-in-January-2021.jpg",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1563521940479-140e6e311385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBiYWJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 4,
    image:
      "https://media.weddingz.in/images/403efe061c254a1296a4db833699da70/Marriage-Dates-in-January-2021.jpg",
  },
];

export default function HomeScreen() {
  const [imgSet, setImgSet] = useState();

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {};

  return (
    <AppScreen>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <InAutoScrollBanner data={data} scrollInterval={2} />
          <View style={styles.navContainer}>
            <View style={styles.navRow}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log()}
              >
                <Image
                  style={styles.navImg}
                  resizeMode="contain"
                  source={require("../Assets/quotation.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log()}
              >
                <Image
                  style={styles.navImg}
                  resizeMode="contain"
                  source={require("../Assets/Rooms.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.navRow}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log()}
              >
                <Image
                  style={styles.navImg}
                  resizeMode="contain"
                  source={require("../Assets/portfolio.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log()}
              >
                <Image
                  style={styles.navImg}
                  resizeMode="contain"
                  source={require("../Assets/selection.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.portfolioContainer}>
            <AppText style={styles.titleText}>Short Gallery</AppText>
            <View style={styles.divider} />
            <View style={styles.imgContainer}>
              <View style={styles.imgRow}>
                <Image
                  source={{ uri: data[0].image }}
                  style={styles.portfolioImg}
                />
                <Image
                  source={{ uri: data[1].image }}
                  style={styles.portfolioImg}
                />
              </View>
              <View style={styles.imgRow}>
                <Image
                  source={{ uri: data[2].image }}
                  style={styles.portfolioImg}
                />
                <Image
                  source={{ uri: data[3].image }}
                  style={styles.portfolioImg}
                />
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.portfolioButton}>
                <AppText style={styles.portfolioButtonText}>View More</AppText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.commentsList}>
            <AppText style={styles.titleText}>
              What Other Telling About Us?
            </AppText>
            <View style={styles.divider} />
            <FlatList
              data={[1, 2, 3]}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                <View style={styles.reviewContainer}>
                  <Image
                    style={styles.reviewImg}
                    source={{ uri: data[0].image }}
                  />
                  <View style={styles.contentContainer}>
                    <View style={styles.cL1}>
                      <AppText style={styles.reviewTitle} numberOfLines={1}>
                        Michael weds Samantha
                      </AppText>
                      <View style={styles.reviewCountContainer}>
                        <AppText style={styles.reviewCount}>{5}.</AppText>
                        <AntDesign name="star" style={styles.reviewIcon} />
                      </View>
                    </View>
                    <View style={styles.cL2}>
                      <View style={styles.category}>
                        <Octicons name="verified" style={styles.reviewIcon} />
                        <AppText style={styles.categoryText}>Wedding</AppText>
                      </View>
                      <AppText style={styles.reviewDate}>12/08/2022</AppText>
                    </View>
                    <AppText style={styles.reviewDesc} numberOfLines={2}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ac maecenas entesque em ipsum dolor sit amet, conse
                    </AppText>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: wp(5),
  },
  navContainer: {
    marginVertical: hp(3),
    width: wp(90),
    height: hp(22),
  },
  navRow: {
    width: wp(90),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navImg: {
    width: wp(44),
    height: hp(11),
  },
  // Portfolio Image
  portfolioContainer: {
    alignItems: "center",
  },
  titleText: {
    fontSize: 16,
  },
  divider: {
    height: wp(2),
    width: wp(65),
    borderTopWidth: 1,
    borderColor: defaultStyles.colors.light,
    marginTop: hp(1.9),
    marginBottom: hp(1),
  },
  imgContainer: {
    width: wp(90),
  },
  imgRow: {
    width: wp(90),
    height: hp(25),
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(1.4),
  },
  portfolioImg: {
    width: "47%",
    height: "100%",
    borderRadius: 13,
  },
  portfolioButton: {
    width: wp(90),
    marginVertical: hp(2),
    height: hp(5.5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D2EFFF",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#0456D2",
    borderRadius: wp(3),
  },
  portfolioButtonText: {
    fontSize: 14,
    color: "#0456D2",
    letterSpacing: 1,
  },
  // Comments Style Start
  commentsList: {
    marginTop: hp(3),
    alignItems: "center",
  },
  reviewContainer: {
    width: wp(90),
    height: hp(12),
    marginVertical: hp(2),
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 15,
    marginBottom: hp(1),
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    ...Platform.select({
      android: {
        elevation: 8,
      },
    }),
    flexDirection: "row",
  },
  reviewImg: {
    width: wp(17),
    height: "100%",
    borderRadius: 10,
    bottom: wp(3),
    marginHorizontal: wp(3),
  },
  contentContainer: {
    flex: 1,
    padding: wp(1.5),
    justifyContent: "space-evenly",
  },
  cL1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reviewCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp(2),
  },
  reviewTitle: {
    flex: 1,
    fontSize: 15,
    color: defaultStyles.colors.dark,
  },
  reviewCount: {
    fontSize: 16,
  },
  reviewIcon: {
    fontSize: 16,
    color: defaultStyles.colors.primary,
  },
  cL2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(1),
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 13,
    color: defaultStyles.colors.medium,
    marginLeft: wp(2),
  },
  reviewDate: {
    fontSize: 13,
    color: defaultStyles.colors.medium,
    marginRight: wp(5),
  },
  reviewDesc: {
    fontSize: 12,
    marginTop: hp(1),
    color: defaultStyles.colors.medium,
  },
});
