import React, { useState, useEffect, createRef } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import AppScreen from "../Components/AppScreen";
import AppTouchIcon from "../Components/AppTouchIcon";
import AppText from "../Components/AppText";
import defaultStyles from "../Config/defaultStyles";

const data = [
  {
    id: 1,
    image:
      "https://filedn.eu/lNtsScJE0pAXu5zG69Ro9R5/studio/RC_02218.jpg",
    category: "Wedding",
  },
  {
    id: 2,
    image:
      "https://editaphotography.in/wp-content/uploads/2019/07/Turning_ONE_baby_photo_shoot_Pune897.jpg",
    category: "Birthday",
  },
  {
    id: 3,
    image:
      "https://filedn.eu/lNtsScJE0pAXu5zG69Ro9R5/studio/DSC00570.jpg",
    category: "Wedding",
  },
  {
    id: 4,
    image: "https://ashokarshphotography.files.wordpress.com/2015/08/walk1.jpg",
    category: "Out door",
  },
  {
    id: 5,
    image:
      "https://static.wixstatic.com/media/15728d_62e7355c707c4118b324fb1e9ace4bf7~mv2.jpg/v1/fill/w_488,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20210307_ARS_9905.jpg",
    category: "Birthday",
  },
];

export default function PortofolioScreen() {
  const flatList = createRef();
  const [selectedImg, setSelectedImg] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filterdata, setFilterdata] = useState();

  const handleFilter = (cat) => {
    if (cat === "All") {
      setFilterdata(data);
      setFilter("All");
    } else {
      setFilterdata(data.filter((item) => item.category === cat));
      setFilter(cat);
    }
    flatList.current.scrollToOffset({ animated: false, offset: 0 });
  };

  useEffect(() => {
    let catList = ["All"];
    data.map((item) => {
      if (catList.indexOf(item.category) === -1) {
        catList.push(item.category);
      }
    });
    setCategoryList(catList);
    handleFilter("All");
    setSelectedImg(data[0].image);
    setFilterdata(data);
  }, []);

  return (
    <AppScreen>
      <View style={styles.screen}>
        <View style={styles.head}>
          <AppTouchIcon name="keyboard-backspace" style={styles.backIcon} />
          <AppText style={styles.headText}>Who about our work?</AppText>
        </View>
        <View style={styles.bigImageContainer}>
          <Image
            source={{
              uri: selectedImg,
            }}
            resizeMode="cover"
            style={styles.bigImage}
          />
        </View>
        <View style={styles.filterContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categoryList}
            key={(item, index) => index}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => handleFilter(item)}
              >
                <AppText
                  style={
                    filter === item
                      ? styles.filterTextActive
                      : styles.filterTextInactive
                  }
                >
                  {item}
                </AppText>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.bottomImgContainer}>
          <FlatList
            ref={flatList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filterdata}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedImg(item.image)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.bottomImg}
                  resizeMode="cover"
                />
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
    paddingTop: hp(1),
    flex: 1,
    alignItems: "center",
    paddingHorizontal: wp(4),
  },
  //   Head Styling
  head: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    margin: wp(2),
    fontSize: 35,
  },
  headText: {
    fontSize: 15,
    marginLeft: wp(15),
  },
  bigImageContainer: {
    width: wp(80),
    height: hp(50),
    marginVertical: hp(2),
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    ...Platform.select({
      android: {
        elevation: 15,
      },
    }),
  },
  bigImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  //   Filter STYLE
  filterContainer: {
    height: hp(4),
    width: wp(100),
    marginVertical: hp(4),
    alignItems: "center",
  },
  filterTextInactive: {
    fontSize: 22,
    marginHorizontal: wp(5),
    fontWeight: "600",
    letterSpacing: 1,
    // textDecorationLine: "line-through",
  },
  filterTextActive: {
    fontSize: 22,
    marginHorizontal: wp(4),
    fontWeight: "600",
    letterSpacing: 1,
    color: defaultStyles.colors.primary,
  },
  //   BOTTOM IMAGE STYLE
  bottomImgContainer: {
    flex: 1,
    width: wp(100),
  },
  bottomImg: {
    width: wp(25),
    height: "100%",
    borderRadius: wp(3),
    marginLeft: wp(4),
  },
});
