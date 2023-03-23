import React, { useState, useEffect } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

import AppScreen from "../Components/AppScreen";
import AppTouchIcon from "../Components/AppTouchIcon";
import AppText from "../Components/AppText";
import defaultStyles from "../Config/defaultStyles";
import StreamComponent from "../Components/common/StreamComponent";

const streams = [
  {
    id: 1,
    title: "Rahul Wedding Celebrations",
    category: "Wedding",
    time: "02:00",
    date: "21",
    month: "Oct",
    is_completed: 1,
    thumbnail:
      "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/on-stage-pose.jpg",
  },
  {
    id: 2,
    title: "Pavani Baby Club",
    category: "Other",
    time: "10:00",
    date: "29",
    month: "Nov",
    is_completed: 1,
    thumbnail: "https://guzzle.akamaized.net/media/blog/632534.jpg",
  },
  {
    id: 3,
    title: "RMB New Year Fest 2022",
    category: "Party",
    time: "21:00",
    date: "Going",
    month: "Now",
    is_completed: 0,
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120__340.jpg",
  },
  {
    id: 4,
    title: "Shelton New Year Fest 2022",
    category: "Party",
    time: "12:00",
    date: "Going",
    month: "Now",
    is_completed: 0,
    thumbnail:
      "https://smanewstoday.com/wp-content/uploads/2019/09/shutterstock_309592520-1000x480-1000x480.jpg",
  },
  {
    id: 5,
    title: "Geetha weds Ram Wedding",
    category: "Wedding",
    time: "01:00",
    date: "12",
    month: "Jan",
    is_completed: -1,
    thumbnail:
      "https://paradiseweddings.com/blog/wp-content/uploads/2022/03/Webp.net-resizeimage-3.jpg",
  },
  {
    id: 6,
    title: "Lokesh Birthday",
    category: "Birthday",
    time: "09:00",
    date: "24",
    month: "Feb",
    is_completed: -1,
    thumbnail:
      "https://images.unsplash.com/photo-1563521940479-140e6e311385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBiYWJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
];

export default function StreamScreen() {
  const [tense, setTense] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [streamData, setStreamData] = useState(streams);
  const handleFilter = (tense_num) => {
    if (tense_num === "") {
      setStreamData(streams);
      setTense(tense_num);
    } else {
      if (tense_num === 0) {
        setStreamData(
          streams.filter(
            (stream) => stream.is_completed === -1 || stream.is_completed === 0
          )
        );
      } else {
        setStreamData(
          streams.filter((stream) => stream.is_completed === tense_num)
        );
      }
      setTense(tense_num);
    }
  };

  const handleSearch = (inp) => {
    if (inp === "") {
      setStreamData(
        streams.filter(
          (stream) => stream.is_completed === -1 || stream.is_completed === 0
        )
      );
      setTense(0);
    } else {
      setStreamData(
        streams.filter((s) => {
          if (String(s.date).indexOf(inp) !== -1) {
            return s;
          }
          if (String(s.month).indexOf(inp) !== -1) {
            return s;
          }
          if (String(s.title).indexOf(inp) !== -1) {
            return s;
          }
          if (String(s.category).indexOf(inp) !== -1) {
            return s;
          }
          if (String(s.time).indexOf(inp) !== -1) {
            return s;
          }
        })
      );
      setTense("");
    }
  };

  useEffect(() => {
    handleFilter(0);
  }, []);

  return (
    <AppScreen>
      <View style={styles.screen}>
        <View style={styles.head}>
          <AppTouchIcon name="keyboard-backspace" style={styles.backIcon} />
          <AppText style={styles.headText}>RC ROOM’s</AppText>
        </View>
        <View style={styles.searchBox}>
          <AntDesign name="search1" style={styles.searchIcon} />
          <TextInput
            onChangeText={(text) => handleSearch(text)}
            style={styles.searchInput}
            keyboardAppearance="light"
            maxLength={10}
            placeholder="Date / Event Name ..."
            placeholderTextColor={defaultStyles.colors.light}
            selectionColor={defaultStyles.colors.white}
          />
        </View>

        <View style={styles.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleFilter("")}
            >
              <AppText
                style={
                  tense === ""
                    ? styles.filterTextActive
                    : styles.filterTextInactive
                }
              >
                ALL
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleFilter(0)}
            >
              <AppText
                style={
                  tense === 0
                    ? styles.filterTextActive
                    : styles.filterTextInactive
                }
              >
                Live Now
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleFilter(1)}
            >
              <AppText
                style={
                  tense === 1
                    ? styles.filterTextActive
                    : styles.filterTextInactive
                }
              >
                Past Events
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleFilter(-1)}
            >
              <AppText
                style={
                  tense === -1
                    ? styles.filterTextActive
                    : styles.filterTextInactive
                }
              >
                Future Events
              </AppText>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.streams}>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={streamData}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log("clicked")}
              >
                <StreamComponent
                  title={item.title}
                  category={item.category}
                  time={item.time}
                  date={item.date}
                  month={item.month}
                  thumbnail={item.thumbnail}
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
    flex: 1,
    paddingHorizontal: wp(5),
    alignItems: "center",
  },
  // Head style
  head: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    margin: wp(2),
    fontSize: 43,
  },
  headText: {
    fontSize: 15,
    marginLeft: wp(19),
  },
  // Search style
  searchBox: {
    width: "100%",
    height: hp(6),
    borderRadius: 50,
    backgroundColor: defaultStyles.colors.black,
    alignItems: "center",
    flexDirection: "row",
    marginTop: hp(2),
  },
  searchIcon: {
    fontSize: 25,
    color: defaultStyles.colors.white,
    marginHorizontal: wp(5),
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: defaultStyles.colors.white,
  },
  // Streams Style
  streams: {
    flex: 1,
    width: "100%",
  },
  // Filters Style
  filterContainer: {
    height: hp(4),
    width: wp(100),
    marginVertical: hp(3.5),
    alignItems: "center",
  },
  filterTextInactive: {
    fontSize: 22,
    marginHorizontal: wp(4),
    fontWeight: "600",
    letterSpacing: 1,
  },
  filterTextActive: {
    fontSize: 22,
    marginHorizontal: wp(4),
    fontWeight: "600",
    letterSpacing: 1,
    color: defaultStyles.colors.primary,
  },
});
