import React, { useState, useEffect, createRef } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Octicons } from "@expo/vector-icons";
import AppScreen from "../Components/AppScreen";
import AppTouchIcon from "../Components/AppTouchIcon";
import AppText from "../Components/AppText";
import defaultStyles from "../Config/defaultStyles";
import { TapGestureHandler } from "react-native-gesture-handler";

const data = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/17/4d/c1/174dc1257bd5e5b1ca56bb8283f5054f.jpg",
    is_selected: true,
  },
  {
    id: 2,
    image:
      "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/31/Pictures/_39077dfc-a31a-11ea-9c65-1b2d349a0abd.jpg",
    is_selected: false,
  },
  {
    id: 3,
    image: "https://images.indianexpress.com/2022/06/yami-aditya-.jpg",
    is_selected: true,
  },
  {
    id: 4,
    image:
      "https://cdn0.weddingwire.in/vendor/0623/3_2/960/jpg/nm_15_210623-160966040357490.jpeg",
    is_selected: true,
  },
  {
    id: 5,
    image:
      "https://www.weddingsonline.ae/blog/wp-content/uploads/2019/05/ChandniArun_WOAE_Blog-008.jpg",
    is_selected: false,
  },
];

export default function photoSelectionScreen() {
  const flatList = createRef();
  const [filterData, setFilterData] = useState();
  const [filter, setFilter] = useState();
  const handleSubmit = () => {};
  const handleLoadData = () => {
    // data.push(...data);
    // handleFilter(filter);
  };
  const handleLikeAction = (id) => {
    data.map((item) => {
      if (item.id === id) {
        item.is_selected = item.is_selected ? false : true;
      }
    });
    if (filter === -1) {
      setFilterData([...data]);
    } else if (filter === 0) {
      var newList = [];
      data.map((item) => {
        if (item.is_selected === false) {
          newList.push(item);
        }
      });
      setFilterData(newList);
    } else if (filter === 1) {
      var newList = [];
      data.map((item) => {
        if (item.is_selected === true) {
          newList.push(item);
        }
      });
      setFilterData(newList);
    }
  };
  const handleFilter = (filter) => {
    if (filter === -1) {
      setFilterData([...data]);
    } else if (filter === 0) {
      var newList = [];
      data.map((item) => {
        if (item.is_selected === false) {
          newList.push(item);
        }
      });
      setFilterData(newList);
    } else if (filter === 1) {
      var newList = [];
      data.map((item) => {
        if (item.is_selected === true) {
          newList.push(item);
        }
      });
      setFilterData(newList);
    }
    setFilter(filter);
    flatList.current.scrollToOffset({ animated: false, offset: 0 });
  };
  useEffect(() => {
    //   Load data
    handleFilter(0);
  }, []);
  return (
    <AppScreen>
      <View style={styles.screen}>
        <View style={styles.head}>
          <AppTouchIcon name="keyboard-backspace" style={styles.backIcon} />
          <AppText style={styles.headText}>Album Selection</AppText>
          <AppTouchIcon
            name="book-arrow-up-outline"
            style={styles.backIcon}
            onPress={() => handleSubmit()}
          />
        </View>

        <View style={styles.countSet}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleFilter(-1)}
          >
            <View style={styles.countContainer}>
              <Octicons
                name="file-directory"
                style={
                  filter === -1 ? styles.countIconActive : styles.countIcon
                }
              />
              <AppText
                style={
                  filter === -1 ? styles.countTextActive : styles.countText
                }
              >
                {3420}
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleFilter(1)}>
            <View style={styles.countContainer}>
              <Octicons
                name="bookmark"
                style={filter === 1 ? styles.countIconActive : styles.countIcon}
              />
              <AppText
                style={filter === 1 ? styles.countTextActive : styles.countText}
              >
                {420}
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleFilter(0)}>
            <View style={styles.countContainer}>
              <Octicons
                name="bookmark-slash"
                style={filter === 0 ? styles.countIconActive : styles.countIcon}
              />
              <AppText
                style={filter === 0 ? styles.countTextActive : styles.countText}
              >
                {3000}
              </AppText>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            ref={flatList}
            onEndReached={handleLoadData}
            onEndReachedThreshold={1}
            data={filterData}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <View style={styles.photoContainer}>
                <TapGestureHandler
                  numberOfTaps={2}
                  onActivated={() => handleLikeAction(item.id)}
                >
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    resizeMode="cover"
                    style={styles.photo}
                  />
                </TapGestureHandler>
                <View style={styles.photoFootContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ paddingHorizontal: wp(3) }}
                    onPress={() => handleLikeAction(item.id)}
                  >
                    <Octicons
                      name={item.is_selected ? "heart-fill" : "heart"}
                      style={
                        item.is_selected
                          ? styles.likeIconActive
                          : styles.likeIcon
                      }
                    />
                  </TouchableOpacity>
                  <Octicons name="share" style={styles.likeIcon} />
                  <View style={styles.divider} />
                  <Image
                    source={require("../Assets/logo-dark.png")}
                    style={styles.logo}
                    resizeMode="contain"
                  />
                </View>
              </View>
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
  },
  head: {
    width: "100%",
    marginTop: hp(1),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 35,
  },
  headText: {
    fontSize: 15,
  },
  // Count Container

  countSet: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: hp(2),
    alignItems: "flex-end",
  },
  countContainer: {
    alignItems: "center",
    width: wp(20),
  },
  countIcon: {
    fontSize: 20,
    marginBottom: hp(1),
  },
  countIconActive: {
    fontSize: 28,
    marginBottom: hp(1),
    color: defaultStyles.colors.primary,
  },
  countText: {
    fontSize: 14,
    letterSpacing: 1,
  },
  countTextActive: {
    fontSize: 14,
    letterSpacing: 1,
    color: defaultStyles.colors.primary,
  },
  // Photos Styling
  listContainer: {
    flex: 1,
    marginTop: hp(4),
  },
  photoContainer: {
    width: wp(100),
    height: hp(38),
  },
  photo: {
    width: "100%",
    height: hp(30),
    justifyContent: "center",
  },
  photoFootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: wp(3),
    alignItems: "center",
    backgroundColor: defaultStyles.colors.white,
  },
  likeIcon: {
    fontSize: 25,
    color: defaultStyles.colors.dark,
  },
  likeIconActive: {
    fontSize: 25,
    color: defaultStyles.colors.primary,
  },
  divider: {
    height: 1,
    width: wp(40),
    borderWidth: 0.5,
    borderStyle: "dashed",
  },
  logo: {
    width: wp(10),
    height: wp(10),
  },

  //   Styles Lottie Heart
  lottieHeart: {
    position: "absolute",
    zIndex: 10,
    top: wp(15),
    left: wp(32.5),
    width: wp(35),
    height: wp(35),
  },
});
